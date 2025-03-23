import { notFound } from 'next/navigation'

interface BlogPost {
  id: string
  title: string
  content: string
  date: string
}

// This would typically come from a database or CMS
const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with Next.js',
    content: `
      Next.js is a powerful framework for building React applications. It provides
      features like server-side rendering, static site generation, and API routes
      out of the box.

      In this post, we'll explore the key features of Next.js and how to get
      started with your first project.
    `,
    date: '2024-03-20',
  },
  {
    id: '2',
    title: 'The Power of TypeScript',
    content: `
      TypeScript has revolutionized the way we write JavaScript. It adds static
      typing to JavaScript, making our code more reliable and easier to maintain.

      Let's dive into why TypeScript is becoming the standard for web development.
    `,
    date: '2024-03-19',
  },
  {
    id: '3',
    title: 'Building Responsive Designs',
    content: `
      Responsive design is crucial in today's multi-device world. With the right
      approach, you can create beautiful websites that work well on any screen size.

      Here are some tips and tricks for creating responsive designs.
    `,
    date: '2024-03-18',
  },
]

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts.find((p) => p.id === params.id)

  if (!post) {
    notFound()
  }

  return (
    <article className="prose lg:prose-xl mx-auto">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900">{post.title}</h1>
        <time className="text-gray-500">{post.date}</time>
      </header>
      <div className="whitespace-pre-wrap">{post.content}</div>
    </article>
  )
} 