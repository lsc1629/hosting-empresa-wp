import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { Calendar, Clock, User, ArrowRight } from 'lucide-react'
import { blogPosts } from '../data/blogPosts'

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

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article 
                  key={post.id}
                  className="glass-effect rounded-xl overflow-hidden group hover:scale-105 transition-all duration-300"
                >
                  {/* Featured Image */}
                  <div className="aspect-video bg-gradient-to-br from-primary-500/20 to-accent-500/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-primary-500/20 backdrop-blur-sm rounded-full text-sm text-primary-400 border border-primary-500/30">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta Info */}
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.publishDate).toLocaleDateString('es-ES')}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime} min</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Author */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>

                      {/* Read More */}
                      <Link
                        to={`/blog/${post.slug}`}
                        className="flex items-center space-x-1 text-primary-400 hover:text-primary-300 transition-colors text-sm font-medium"
                      >
                        <span>Leer más</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-800/50 rounded text-xs text-gray-400"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
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
