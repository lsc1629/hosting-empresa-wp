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
      setIsLoading(true)
      setError(null)

      try {
        // Cargar imagen destacada
        const featured = await getFeaturedImage(title, tags)
        setFeaturedImage(featured)

        // Cargar imágenes de contenido si se proporciona el contenido
        if (content) {
          const contentImgs = await getContentImages(content, 2)
          setContentImages(contentImgs)
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error loading images')
        console.error('Error loading blog images:', err)
      } finally {
        setIsLoading(false)
      }
    }

    if (title && tags.length > 0) {
      loadImages()
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
      setIsLoading(true)
      try {
        const featured = await getFeaturedImage(title, tags)
        setImage(featured)
      } catch (err) {
        console.error('Error loading featured image:', err)
      } finally {
        setIsLoading(false)
      }
    }

    if (title && tags.length > 0) {
      loadImage()
    }
  }, [title, tags])

  return { image, isLoading }
}
