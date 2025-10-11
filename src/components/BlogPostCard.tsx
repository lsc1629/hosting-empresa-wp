import { Link } from 'react-router-dom'
import { Calendar, Clock, User, ArrowRight } from 'lucide-react'
import { BlogPost } from '../data/blogPosts'
import { getLocalizedRoute } from '../config/routes'
import { useFeaturedImage } from '../hooks/useBlogImages'
import BlogImage from './BlogImage'

interface BlogPostCardProps {
  post: BlogPost
  language: string
}

const BlogPostCard = ({ post, language }: BlogPostCardProps) => {
  const { image, isLoading } = useFeaturedImage(post.title, post.tags)

  return (
    <article className="glass-effect rounded-xl overflow-hidden group hover:scale-105 transition-all duration-300">
      {/* Featured Image */}
      <div className="aspect-video relative overflow-hidden">
        {isLoading ? (
          <div className="w-full h-full bg-gradient-to-br from-primary-500/20 to-accent-500/20 animate-pulse flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : image ? (
          <BlogImage
            image={image}
            alt={post.title}
            className="w-full h-full object-cover"
            showAttribution={false}
            lazy={true}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center">
            <div className="text-center text-primary-400">
              <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
              <p className="text-sm">Hosting</p>
            </div>
          </div>
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        
        {/* Category Badge */}
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
            <span>{new Date(post.publishDate).toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US')}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{post.readTime} min</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors line-clamp-2">
          {post.title}
        </h2>

        {/* Excerpt */}
        <p className="text-gray-300 mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Author and Read More */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <User className="w-4 h-4" />
            <span>{post.author}</span>
          </div>

          {/* Read More */}
          <Link
            to={`${getLocalizedRoute('blog', language)}/${post.slug}`}
            className="flex items-center space-x-1 text-primary-400 hover:text-primary-300 transition-colors text-sm font-medium"
          >
            <span>{language === 'es' ? 'Leer más' : 'Read more'}</span>
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
  )
}

export default BlogPostCard
