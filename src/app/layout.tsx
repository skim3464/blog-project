import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'The SK Files in Progress',
  description: 'Where nothing\'s finished, but everything gets a folder.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <header className="bg-mint-50 shadow-sm">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <a href="/" className="text-xl font-playfair font-bold text-gray-800">
                  The SK Files in Progress
                </a>
              </div>
              <div className="flex items-center">
                <nav className="hidden md:flex space-x-8">
                  <Link href="/" className="text-gray-700 hover:text-blue-600">
                    Home
                  </Link>
                  <Link href="/about" className="text-gray-700 hover:text-blue-600">
                    About
                  </Link>
                  <Link href="/contact" className="text-gray-700 hover:text-blue-600">
                    Contact
                  </Link>
                </nav>
              </div>
            </div>
          </nav>
        </header>
        <main className="min-h-screen bg-gray-50">
          {children}
        </main>
        <footer className="bg-white border-t">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-gray-500">
              © {new Date().getFullYear()} The SK Files in Progress. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
} 