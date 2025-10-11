// Servicio para obtener imágenes de Pixabay API
// API Key pública de demostración - en producción usar variable de entorno

const PIXABAY_API_KEY = '9656065-a4094594c34f9ac14c7fc4c39'
const PIXABAY_BASE_URL = 'https://pixabay.com/api/'

// Debug flag
const DEBUG = true

export interface PixabayImage {
  id: number
  pageURL: string
  type: string
  tags: string
  previewURL: string
  previewWidth: number
  previewHeight: number
  webformatURL: string
  webformatWidth: number
  webformatHeight: number
  largeImageURL?: string
  views: number
  downloads: number
  likes: number
  user: string
  userImageURL: string
}

export interface PixabayResponse {
  total: number
  totalHits: number
  hits: PixabayImage[]
}

// Cache para evitar llamadas repetidas
const imageCache = new Map<string, PixabayImage[]>()

export const searchImages = async (
  query: string,
  options: {
    category?: 'backgrounds' | 'fashion' | 'nature' | 'science' | 'education' | 'feelings' | 'health' | 'people' | 'religion' | 'places' | 'animals' | 'industry' | 'computer' | 'food' | 'sports' | 'transportation' | 'travel' | 'buildings' | 'business' | 'music'
    orientation?: 'all' | 'horizontal' | 'vertical'
    imageType?: 'all' | 'photo' | 'illustration' | 'vector'
    minWidth?: number
    minHeight?: number
    perPage?: number
    safeSearch?: boolean
  } = {}
): Promise<PixabayImage[]> => {
  const cacheKey = `${query}-${JSON.stringify(options)}`
  
  // Verificar cache
  if (imageCache.has(cacheKey)) {
    return imageCache.get(cacheKey)!
  }

  try {
    const params = new URLSearchParams({
      key: PIXABAY_API_KEY,
      q: encodeURIComponent(query),
      image_type: options.imageType || 'photo',
      orientation: options.orientation || 'horizontal',
      category: options.category || 'business',
      min_width: (options.minWidth || 640).toString(),
      min_height: (options.minHeight || 360).toString(),
      per_page: (options.perPage || 6).toString(),
      safesearch: (options.safeSearch !== false).toString(),
      order: 'popular',
      lang: 'en'
    })

    const url = `${PIXABAY_BASE_URL}?${params}`
    if (DEBUG) {
      console.log('🔍 Pixabay API Request:', { query, url })
    }

    const response = await fetch(url)
    
    if (!response.ok) {
      throw new Error(`Pixabay API error: ${response.status} - ${response.statusText}`)
    }

    const data: PixabayResponse = await response.json()
    
    if (DEBUG) {
      console.log('📸 Pixabay API Response:', { 
        query, 
        total: data.total, 
        hits: data.hits.length,
        firstImage: data.hits[0]?.webformatURL 
      })
    }
    
    // Guardar en cache
    imageCache.set(cacheKey, data.hits)
    
    return data.hits
  } catch (error) {
    console.error('❌ Error fetching images from Pixabay:', error)
    return []
  }
}

// Función específica para obtener imágenes relacionadas con hosting
export const getHostingImages = async (topic: string): Promise<PixabayImage[]> => {
  const hostingQueries = [
    `${topic} server technology`,
    `${topic} web hosting`,
    `${topic} cloud computing`,
    `${topic} data center`,
    `${topic} network technology`
  ]

  // Intentar con diferentes queries hasta encontrar imágenes
  for (const query of hostingQueries) {
    const images = await searchImages(query, {
      category: 'computer',
      orientation: 'horizontal',
      imageType: 'photo',
      minWidth: 800,
      minHeight: 400,
      perPage: 3
    })

    if (images.length > 0) {
      return images
    }
  }

  // Fallback con query genérico
  return await searchImages('web hosting server', {
    category: 'computer',
    orientation: 'horizontal',
    imageType: 'photo',
    perPage: 3
  })
}

// Función para obtener imagen destacada de un artículo
export const getFeaturedImage = async (
  _title: string, 
  tags: string[]
): Promise<PixabayImage | null> => {
  if (DEBUG) {
    console.log('🎯 Getting featured image for tags:', tags)
  }

  // Intentar con diferentes queries hasta encontrar una imagen
  const queries = [
    tags.slice(0, 2).join(' ') + ' technology',
    tags[0] + ' server',
    'web hosting technology',
    'server technology',
    'computer technology'
  ]

  for (const query of queries) {
    const images = await searchImages(query, {
      category: 'computer',
      orientation: 'horizontal',
      imageType: 'photo',
      minWidth: 800,
      minHeight: 400,
      perPage: 1
    })

    if (images.length > 0) {
      if (DEBUG) {
        console.log('✅ Found featured image with query:', query)
      }
      return images[0]
    }
  }

  if (DEBUG) {
    console.log('❌ No featured image found for tags:', tags)
  }
  return null
}

// Función para obtener imágenes de contenido
export const getContentImages = async (
  content: string,
  count: number = 2
): Promise<PixabayImage[]> => {
  // Extraer keywords del contenido
  const keywords = extractKeywords(content)
  const query = keywords.slice(0, 3).join(' ')

  return await searchImages(query, {
    category: 'computer',
    orientation: 'horizontal',
    imageType: 'photo',
    perPage: count
  })
}

// Función auxiliar para extraer keywords del contenido
const extractKeywords = (content: string): string[] => {
  const techKeywords = [
    'hosting', 'server', 'wordpress', 'website', 'domain', 
    'ssl', 'security', 'performance', 'speed', 'backup',
    'cloud', 'database', 'php', 'mysql', 'cdn'
  ]

  const words = content.toLowerCase().split(/\s+/)
  const foundKeywords = techKeywords.filter(keyword => 
    words.some(word => word.includes(keyword))
  )

  return foundKeywords.length > 0 ? foundKeywords : ['web', 'technology', 'business']
}

// Función para limpiar cache (útil para desarrollo)
export const clearImageCache = (): void => {
  imageCache.clear()
}
