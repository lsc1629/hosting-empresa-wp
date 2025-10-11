// Sistema de imágenes de fallback para cuando la API de Pixabay falla
// Usando Unsplash Source API que no requiere autenticación

export interface FallbackImage {
  id: string
  url: string
  alt: string
  tags: string[]
  width: number
  height: number
}

// Imágenes de fallback usando Unsplash Source
export const generateFallbackImage = (
  keywords: string[], 
  width: number = 800, 
  height: number = 400
): FallbackImage => {
  // Mapear keywords a categorías de Unsplash
  const categoryMap: Record<string, string> = {
    'hosting': 'technology',
    'server': 'technology',
    'wordpress': 'technology',
    'web': 'technology',
    'business': 'business',
    'technology': 'technology',
    'computer': 'technology',
    'cloud': 'technology',
    'network': 'technology'
  }

  // Seleccionar la mejor categoría basada en keywords
  const category = keywords.find(k => categoryMap[k.toLowerCase()]) || 'technology'
  const unsplashCategory = categoryMap[category.toLowerCase()] || 'technology'

  // Generar URL de Unsplash Source
  const baseUrl = 'https://source.unsplash.com'
  const url = `${baseUrl}/${width}x${height}/?${unsplashCategory}`

  return {
    id: `fallback-${Date.now()}`,
    url,
    alt: `${keywords.join(' ')} - Professional image`,
    tags: keywords,
    width,
    height
  }
}

// Imágenes predefinidas para casos específicos
export const predefinedImages: Record<string, FallbackImage> = {
  hosting: {
    id: 'hosting-default',
    url: 'https://source.unsplash.com/800x400/?server,technology',
    alt: 'Web hosting server technology',
    tags: ['hosting', 'server', 'technology'],
    width: 800,
    height: 400
  },
  wordpress: {
    id: 'wordpress-default', 
    url: 'https://source.unsplash.com/800x400/?wordpress,cms',
    alt: 'WordPress content management system',
    tags: ['wordpress', 'cms', 'website'],
    width: 800,
    height: 400
  },
  business: {
    id: 'business-default',
    url: 'https://source.unsplash.com/800x400/?business,office',
    alt: 'Business and technology',
    tags: ['business', 'office', 'professional'],
    width: 800,
    height: 400
  },
  technology: {
    id: 'technology-default',
    url: 'https://source.unsplash.com/800x400/?technology,computer',
    alt: 'Technology and computers',
    tags: ['technology', 'computer', 'digital'],
    width: 800,
    height: 400
  }
}

// Función para obtener imagen de fallback basada en tags
export const getFallbackImageByTags = (tags: string[]): FallbackImage => {
  // Buscar coincidencia exacta primero
  for (const tag of tags) {
    const lowerTag = tag.toLowerCase()
    if (predefinedImages[lowerTag]) {
      return predefinedImages[lowerTag]
    }
  }

  // Si no hay coincidencia exacta, generar una dinámica
  return generateFallbackImage(tags)
}

// Función para obtener múltiples imágenes de fallback
export const getFallbackImages = (
  tags: string[], 
  count: number = 3
): FallbackImage[] => {
  const images: FallbackImage[] = []
  
  for (let i = 0; i < count; i++) {
    const image = generateFallbackImage(tags, 800, 400)
    // Agregar timestamp único para evitar duplicados
    image.id = `${image.id}-${i}`
    image.url = `${image.url}&sig=${i}`
    images.push(image)
  }
  
  return images
}

// Convertir FallbackImage a formato PixabayImage para compatibilidad
export const convertToPixabayFormat = (fallbackImage: FallbackImage) => {
  return {
    id: parseInt(fallbackImage.id.replace(/\D/g, '')) || Math.floor(Math.random() * 1000000),
    pageURL: fallbackImage.url,
    type: 'photo',
    tags: fallbackImage.tags.join(', '),
    previewURL: fallbackImage.url.replace(/\/\d+x\d+\//, '/150x150/'),
    previewWidth: 150,
    previewHeight: 150,
    webformatURL: fallbackImage.url,
    webformatWidth: fallbackImage.width,
    webformatHeight: fallbackImage.height,
    largeImageURL: fallbackImage.url.replace(/\/\d+x\d+\//, '/1920x1080/'),
    views: Math.floor(Math.random() * 10000),
    downloads: Math.floor(Math.random() * 5000),
    likes: Math.floor(Math.random() * 500),
    comments: Math.floor(Math.random() * 50),
    user_id: 1,
    user: 'Unsplash',
    userImageURL: 'https://source.unsplash.com/50x50/?avatar'
  }
}
