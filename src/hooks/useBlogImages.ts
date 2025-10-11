import { useState, useEffect } from 'react'
import { PixabayImage, getFeaturedImage, getContentImages } from '../services/imageService'

interface UseBlogImagesReturn {
  featuredImage: PixabayImage | null
  contentImages: PixabayImage[]
  isLoading: boolean
  error: string | null
}

export const useBlogImages = (
  title: string,
  tags: string[],
  content?: string
): UseBlogImagesReturn => {
  const [featuredImage, setFeaturedImage] = useState<PixabayImage | null>(null)
  const [contentImages, setContentImages] = useState<PixabayImage[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadImages = async () => {
      console.log('🚀 Loading images for:', { title, tags, hasContent: !!content })
      setIsLoading(true)
      setError(null)

      try {
        // Cargar imagen destacada
        console.log('📸 Loading featured image...')
        const featured = await getFeaturedImage(title, tags)
        console.log('✅ Featured image loaded:', !!featured)
        setFeaturedImage(featured)

        // Cargar imágenes de contenido si se proporciona el contenido
        if (content) {
          console.log('📸 Loading content images...')
          const contentImgs = await getContentImages(content, 2)
          console.log('✅ Content images loaded:', contentImgs.length)
          setContentImages(contentImgs)
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Error loading images'
        setError(errorMessage)
        console.error('❌ Error loading blog images:', err)
      } finally {
        setIsLoading(false)
        console.log('🏁 Image loading completed')
      }
    }

    if (title && tags.length > 0) {
      console.log('🎬 Starting image loading process')
      loadImages()
    } else {
      console.log('⚠️ Skipping image loading - missing title or tags:', { title, tags })
    }
  }, [title, tags, content])

  return {
    featuredImage,
    contentImages,
    isLoading,
    error
  }
}

// Hook simplificado para obtener solo imagen destacada
export const useFeaturedImage = (title: string, tags: string[]) => {
  const [image, setImage] = useState<PixabayImage | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadImage = async () => {
      console.log('🎯 Loading featured image for:', { title, tags })
      setIsLoading(true)
      try {
        const featured = await getFeaturedImage(title, tags)
        console.log('✅ Featured image result:', !!featured)
        setImage(featured)
      } catch (err) {
        console.error('❌ Error loading featured image:', err)
      } finally {
        setIsLoading(false)
      }
    }

    if (title && tags.length > 0) {
      loadImage()
    } else {
      console.log('⚠️ Skipping featured image - missing data:', { title, tags })
      setIsLoading(false)
    }
  }, [title, tags])

  return { image, isLoading }
}
