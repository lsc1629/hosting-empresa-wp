import { useState, useEffect } from 'react'
import { searchImages, PixabayImage } from '../services/imageService'

const ImageTest = () => {
  const [images, setImages] = useState<PixabayImage[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const testAPI = async () => {
    setLoading(true)
    setError(null)
    console.log('🧪 Testing Pixabay API...')
    
    try {
      const results = await searchImages('technology', {
        category: 'computer',
        perPage: 3
      })
      
      console.log('🧪 Test results:', results)
      setImages(results)
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Unknown error'
      setError(errorMsg)
      console.error('🧪 Test failed:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    testAPI()
  }, [])

  return (
    <div className="p-6 bg-gray-800 rounded-lg">
      <h3 className="text-white text-lg font-bold mb-4">🧪 Pixabay API Test</h3>
      
      {loading && (
        <div className="text-yellow-400">Loading images...</div>
      )}
      
      {error && (
        <div className="text-red-400">Error: {error}</div>
      )}
      
      {images.length > 0 && (
        <div className="space-y-4">
          <div className="text-green-400">✅ Found {images.length} images!</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {images.map((image) => (
              <div key={image.id} className="bg-gray-700 rounded-lg p-4">
                <img 
                  src={image.previewURL} 
                  alt={image.tags}
                  className="w-full h-32 object-cover rounded mb-2"
                />
                <p className="text-white text-sm">{image.tags}</p>
                <p className="text-gray-400 text-xs">By: {image.user}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <button 
        onClick={testAPI}
        className="mt-4 px-4 py-2 bg-primary-500 text-white rounded hover:bg-primary-600"
        disabled={loading}
      >
        {loading ? 'Testing...' : 'Test Again'}
      </button>
    </div>
  )
}

export default ImageTest
