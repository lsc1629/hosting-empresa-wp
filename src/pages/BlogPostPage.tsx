import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { Calendar, Clock, User, ArrowLeft, Share2, BookOpen } from 'lucide-react'
import { blogPosts } from '../data/blogPosts'
import { getLocalizedRoute } from '../config/routes'
import { useBlogImages } from '../hooks/useBlogImages'
import BlogImage from '../components/BlogImage'
import ReactMarkdown from 'react-markdown'

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>()
  const { i18n } = useTranslation()
  const [post, setPost] = useState(blogPosts.find(p => p.slug === slug))
  
  // Cargar imágenes para el artículo
  const { featuredImage } = useBlogImages(
    post?.title || '',
    post?.tags || [],
    post?.content
  )

  useEffect(() => {
    window.scrollTo(0, 0)
    setPost(blogPosts.find(p => p.slug === slug))
  }, [slug])

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-950 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Artículo no encontrado</h1>
          <Link to="/blog" className="btn-primary">
            Volver al Blog
          </Link>
        </div>
      </div>
    )
  }

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.lang === post.lang)
    .slice(0, 3)

  return (
    <>
      <Helmet>
        <title>{post.seoTitle}</title>
        <meta name="description" content={post.metaDescription} />
        <meta name="keywords" content={post.keywords.join(', ')} />
        <link rel="canonical" href={`${window.location.origin}/blog/${post.slug}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={post.seoTitle} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${window.location.origin}/blog/${post.slug}`} />
        
        {/* Article specific */}
        <meta property="article:author" content={post.author} />
        <meta property="article:published_time" content={post.publishDate} />
        <meta property="article:section" content={post.category} />
        {post.tags.map(tag => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.metaDescription,
            "author": {
              "@type": "Organization",
              "name": post.author
            },
            "datePublished": post.publishDate,
            "dateModified": post.publishDate,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `${window.location.origin}/blog/${post.slug}`
            },
            "publisher": {
              "@type": "Organization",
              "name": "Hosting Empresas"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gray-950 pt-20">
        {/* Back to Blog */}
        <div className="container-custom py-6">
          <Link 
            to={getLocalizedRoute('blog', i18n.language)} 
            className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{i18n.language === 'es' ? 'Volver al Blog' : 'Back to Blog'}</span>
          </Link>
        </div>

        {/* Article Header */}
        <article className="container-custom pb-16">
          <header className="max-w-4xl mx-auto mb-12">
            {/* Category */}
            <div className="mb-6">
              <span className="px-4 py-2 bg-primary-500/20 backdrop-blur-sm rounded-full text-primary-400 border border-primary-500/30">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8">
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>{new Date(post.publishDate).toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime} min de lectura</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5" />
                <span>{post.content.split(' ').length} palabras</span>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400">Compartir:</span>
              <button className="p-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors">
                <Share2 className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </header>

          {/* Featured Image */}
          {featuredImage && (
            <div className="max-w-4xl mx-auto mb-12">
              <BlogImage
                image={featuredImage}
                alt={post.title}
                className="w-full rounded-xl shadow-2xl"
                showAttribution={true}
              />
            </div>
          )}

          {/* Article Content */}
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-invert max-w-none">
              <ReactMarkdown
                components={{
                  h1: ({ children }) => (
                    <h1 className="text-4xl font-bold text-white mb-6 mt-12 first:mt-0">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-3xl font-bold text-white mb-4 mt-10">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-2xl font-bold text-white mb-4 mt-8">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                      {children}
                    </p>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                      {children}
                    </ul>
                  ),
                  li: ({ children }) => (
                    <li className="text-gray-300">{children}</li>
                  ),
                  strong: ({ children }) => (
                    <strong className="text-primary-400 font-semibold">{children}</strong>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-primary-500 pl-6 my-8 bg-gray-800/30 py-4 rounded-r-lg">
                      {children}
                    </blockquote>
                  )
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-800">
              <h4 className="text-lg font-semibold text-white mb-4">Etiquetas:</h4>
              <div className="flex flex-wrap gap-3">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg text-gray-300 transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
            <div className="container-custom">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">
                Artículos Relacionados
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`${getLocalizedRoute('blog', i18n.language)}/${relatedPost.slug}`}
                    className="glass-effect rounded-xl p-6 group hover:scale-105 transition-all duration-300"
                  >
                    <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors">
                      {relatedPost.title}
                    </h4>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{relatedPost.category}</span>
                      <span>{relatedPost.readTime} min</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary-900/20 to-accent-900/20">
          <div className="container-custom text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              ¿Listo para Optimizar tu Hosting?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Aplica estos consejos con el mejor hosting empresarial del mercado. 
              Velocidad, seguridad y soporte garantizados.
            </p>
            <button className="btn-primary text-lg px-8 py-4">
              Ver Planes de Hosting
            </button>
          </div>
        </section>
      </div>
    </>
  )
}

export default BlogPostPage
