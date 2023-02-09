import Link from 'next/link'
import './globals.css'
import { Inter } from '@next/font/google'

const font = Inter({
  subsets: ['latin']
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='bg-black' >
        <main className={font.className}>
          <nav className="flex justify-evenly bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 text-3xl font-bold rounded-b-md p-5">
            <Link href="/" className="text-black hover:text-gray-100">
              Home
            </Link>
            <Link href="/" className="text-black hover:text-gray-100">
              Reviews
            </Link>
            <Link href="/calendar" className="text-black hover:text-gray-100">
              Calendar
            </Link>
            <Link href="/link" className="text-black hover:text-gray-100">
              Links
            </Link>
          </nav>
          {children}
        </main>
      </body>
    </html>
  )
}
