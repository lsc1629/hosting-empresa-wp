import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { blogPosts } from '../data/blogPosts'
import BlogPostCard from '../components/BlogPostCard'
import ImageTest from '../components/ImageTest'

const BlogPage = () => {
  const { i18n } = useTranslation()

  // Filtrar posts por idioma
  const filteredPosts = blogPosts.filter(post => post.lang === i18n.language)

  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Helmet>
        <title>Blog de Hosting Empresarial - Guías y Consejos Expertos</title>
        <meta name="description" content="Descubre las mejores prácticas, guías y consejos sobre hosting empresarial. Artículos expertos para optimizar tu presencia web." />
        <meta name="keywords" content="blog hosting, guías hosting, consejos hosting empresarial, artículos hosting" />
        <link rel="canonical" href={`${window.location.origin}/blog`} />
      </Helmet>

      <div className="min-h-screen bg-gray-950 pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-950 to-black">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
                Blog de Hosting Empresarial
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Descubre las mejores prácticas, guías expertas y consejos para optimizar 
                tu hosting empresarial y llevar tu negocio al siguiente nivel.
              </p>
            </div>
          </div>
        </section>

        {/* API Test - Temporal */}
        <section className="py-8">
          <div className="container-custom">
            <ImageTest />
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogPostCard 
                  key={post.id}
                  post={post}
                  language={i18n.language}
                />
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="btn-secondary">
                Cargar Más Artículos
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="py-16 bg-gradient-to-r from-primary-900/20 to-accent-900/20">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-3xl font-bold text-white mb-4">
                Mantente Actualizado
              </h3>
              <p className="text-gray-300 mb-8">
                Recibe los últimos artículos y consejos sobre hosting empresarial directamente en tu email.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Tu email empresarial"
                  className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500"
                />
                <button className="btn-primary px-8">
                  Suscribirse
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default BlogPage
