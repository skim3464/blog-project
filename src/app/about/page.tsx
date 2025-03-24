'use client'

import Link from 'next/link'

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-8">About Me</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-6">
            Hi! I'm a working mom living in New York, originally from Korea, now raising a toddler, 
            working full-time, running (mentally and physically) when I can, and occasionally 
            remembering to take a break—to eat, listen to music, read a book, chat with a friend, 
            or just stare into space for a moment of peace.
          </p>

          <p className="text-gray-700 mb-6">
            By day, I work as an evaluator and social researcher, mostly on programs related to 
            gender issues—trying to make sense of the world through data, interviews, and far too 
            many spreadsheets.
          </p>

          <p className="text-gray-700 mb-6">
            By night, I'm usually negotiating with a very small but alarmingly powerful human 
            (my daughter), being silently judged by my cat, or catching up on Netflix while 
            panic-ordering the next batch of diaper bags or toilet paper from my phone.
          </p>

          <p className="text-gray-700 mb-6">
            This website is my little corner of the internet where I document the chaos, the calm, 
            and all the curiosities in between. Expect a mix of thoughts, projects, experiments, 
            maybe some parenting wisdom (or confusion), and whatever else I feel like sharing when 
            I stumble upon a spare moment—which is rare, and therefore sacred.
          </p>

          <p className="text-gray-700">
            Thanks for stopping by. I hope something here makes you smile, think, or at least feel 
            slightly more put together than me.
          </p>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <Link 
            href="/"
            className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
} 