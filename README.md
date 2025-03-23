# My Blog

A modern blog built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Modern and responsive design
- Server-side rendering
- TypeScript for type safety
- Tailwind CSS for styling
- Dynamic blog post routing

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to Vercel

1. Push your code to a GitHub repository.

2. Go to [Vercel](https://vercel.com) and sign in with your GitHub account.

3. Click "New Project" and select your repository.

4. Vercel will automatically detect that it's a Next.js project and configure the build settings.

5. Click "Deploy" and wait for the deployment to complete.

6. Your blog will be live at `https://your-project-name.vercel.app`

## Project Structure

- `src/app/` - Contains the main application code
  - `layout.tsx` - Root layout component
  - `page.tsx` - Home page
  - `posts/[id]/page.tsx` - Individual blog post pages
- `public/` - Static assets
- `src/styles/` - Global styles

## Technologies Used

- Next.js 14
- TypeScript
- Tailwind CSS
- React 18 