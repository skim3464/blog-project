'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('submitting')

    try {
      const response = await fetch('https://formspree.io/f/xldjndpd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setFormStatus('submitted')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setFormStatus('error')
      }
    } catch (error) {
      setFormStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-8">Get in Touch</h1>
        
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-gray-700">
            Have a question, suggestion, or just want to say hello? I'd love to hear from you! 
            Fill out the form below, and I'll get back to you as soon as possible.
          </p>
        </div>

        {formStatus === 'submitted' ? (
          <div className="bg-green-50 border border-green-200 rounded-md p-6 mb-8">
            <h3 className="text-lg font-medium text-green-800 mb-2">Thank you for your message!</h3>
            <p className="text-green-700">
              I'll get back to you as soon as possible. In the meantime, feel free to check out my latest blog posts.
            </p>
            <Link 
              href="/"
              className="inline-block mt-4 text-green-700 hover:text-green-900 font-medium"
            >
              ← Back to Home
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                  formStatus === 'submitting' ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
            </div>

            {formStatus === 'error' && (
              <div className="text-red-600 text-sm mt-2">
                There was an error sending your message. Please try again later.
              </div>
            )}
          </form>
        )}

        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">Other Ways to Connect</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              You can also find me on various social platforms:
            </p>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://twitter.com/YOUR_TWITTER" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com/in/YOUR_LINKEDIN" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 