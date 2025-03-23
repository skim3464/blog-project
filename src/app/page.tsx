'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import Calendar from '../components/Calendar'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  category: string
  image: string
}

interface Event {
  id: string
  title: string
  date: string
  description?: string
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Art of Balancing Work and Parenting',
    excerpt: 'Practical tips and strategies for maintaining work-life balance while raising children.',
    date: 'March 23, 2024',
    category: 'Parenting',
    image: '/images/placeholder.jpg',
  },
  {
    id: '2',
    title: 'Latest Findings in Social Research',
    excerpt: 'Exploring recent developments in social research and their implications for society.',
    date: 'March 20, 2024',
    category: 'Research',
    image: '/images/placeholder.jpg',
  },
  {
    id: '3',
    title: 'Building a Sustainable Self-Care Routine',
    excerpt: 'How to create and maintain a self-care routine that works for busy professionals.',
    date: 'March 18, 2024',
    category: 'Self-care',
    image: '/images/placeholder.jpg',
  },
]

const categories = [
  'Parenting',
  'Research',
  'Self-care',
  'Work-life Balance',
]

export default function Home() {
  const [events, setEvents] = useState<Event[]>([
    {
      id: '1',
      title: 'Parenting Workshop',
      date: '2024-03-25',
      description: 'Join us for a workshop on effective parenting strategies.',
    },
    {
      id: '2',
      title: 'Research Presentation',
      date: '2024-03-28',
      description: 'Presenting latest findings in social research.',
    },
  ])

  const handleAddEvent = (newEvent: Omit<Event, 'id'>) => {
    const event: Event = {
      ...newEvent,
      id: Date.now().toString(),
    }
    setEvents([...events, event])
  }

  const handleUpdateEvent = (updatedEvent: Event) => {
    setEvents(events.map(event => 
      event.id === updatedEvent.id ? updatedEvent : event
    ))
  }

  const handleDeleteEvent = (eventId: string) => {
    setEvents(events.filter(event => event.id !== eventId))
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Hero Section */}
          <section className="mb-12">
            <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
              The SK Files in Progress
            </h1>
            <p className="text-xl text-gray-600">
              Where nothing's finished, but everything gets a folder. Let's start from a working mom, 
              toddler wranggler, runner but will see where this will end up.
            </p>
          </section>

          {/* Featured Posts */}
          <section className="mb-12">
            <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">Latest Posts</h2>
            <div className="space-y-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3">
                      <div className="relative h-48 md:h-full">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="p-6 md:w-2/3">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.category}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        <Link href={`/posts/${post.id}`} className="hover:text-blue-600">
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <Link 
                        href={`/posts/${post.id}`}
                        className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                      >
                        Read more →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Newsletter Section */}
          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">Stay Updated</h2>
            <p className="text-gray-600 mb-6">
              Subscribe to my newsletter for the latest posts and insights.
            </p>
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Subscribe
              </button>
            </form>
          </section>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          {/* Calendar Widget */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-playfair font-bold text-gray-900 mb-4">Calendar</h3>
            <Calendar 
              events={events} 
              onAddEvent={handleAddEvent}
              onUpdateEvent={handleUpdateEvent}
              onDeleteEvent={handleDeleteEvent}
            />
          </div>

          {/* Categories Widget */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-playfair font-bold text-gray-900 mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category}>
                  <Link
                    href={`/category/${category.toLowerCase()}`}
                    className="text-gray-600 hover:text-blue-600"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 