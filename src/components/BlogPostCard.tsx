import { Link } from 'react-router-dom'
import { Calendar, Clock, User, ArrowRight } from 'lucide-react'
import { BlogPost } from '../data/blogPosts'
import { getLocalizedRoute } from '../config/routes'

interface BlogPostCardProps {
  post: BlogPost
  language: string
}

const BlogPostCard = ({ post, language }: BlogPostCardProps) => {

  return (
    <article className="glass-effect rounded-xl overflow-hidden group hover:scale-105 transition-all duration-300">
      {/* Header with Category */}
      <div className="p-6 pb-4">
        <div className="flex items-center justify-between mb-4">
          <span className="px-3 py-1 bg-primary-500/20 backdrop-blur-sm rounded-full text-sm text-primary-400 border border-primary-500/30">
            {post.category}
          </span>
          <div className="flex items-center space-x-2 text-xs text-gray-500">
            <Clock className="w-3 h-3" />
            <span>{post.readTime} min</span>
          </div>
        </div>
        
        {/* Title */}
        <h2 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors line-clamp-2">
          {post.title}
        </h2>
      </div>

      {/* Content */}
      <div className="px-6 pb-6">
        {/* Meta Info */}
        <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>{new Date(post.publishDate).toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US')}</span>
          </div>
          <div className="flex items-center space-x-1">
            <User className="w-4 h-4" />
            <span>{post.author}</span>
          </div>
        </div>

        {/* Excerpt */}
        <p className="text-gray-300 mb-6 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Read More */}
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-gray-800/50 rounded text-xs text-gray-400"
              >
                #{tag}
              </span>
            ))}
          </div>
          
          <Link
            to={`${getLocalizedRoute('blog', language)}/${post.slug}`}
            className="flex items-center space-x-1 text-primary-400 hover:text-primary-300 transition-colors text-sm font-medium"
          >
            <span>{language === 'es' ? 'Leer más' : 'Read more'}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  )
}

export default BlogPostCard
