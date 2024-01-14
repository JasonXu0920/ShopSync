import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  return (
   <div className=''>
      <Header />
      <main className='max-w-6xl mx-auto p-2'>
        {isLoading? (
          <p className='text-center animate-pulse text-blue-500'>
            Loading listings...
          </p>
        ) : (
          <p className='text-center'>
            Loaded
          </p>
        )}
      </main>
   </div>
  )
}
