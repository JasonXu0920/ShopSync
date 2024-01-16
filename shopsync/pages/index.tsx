import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import { useState } from 'react'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })
const listingId = 1;
export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  return (
   <div className=''>
      <Header />
      <main className='max-w-6xl mx-auto p-2'>
        {isLoading? (
          <p className='text-center animate-pulse text-blue-500'>
            Loading listings...
          </p>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-auto'>
            <Link href={`/listing/${listingId}`}>
              <div className='flex flex-col card hover:scale-105 transition-all duration-150 ease-out'>
                <div className='flex-1 flex flex-col pb-2 items-center'>
                  image 
                </div>
                <div className='pt-2 space-y-4'>
                  <div>
                    <h2 className='text-lg truncate'>Item 1</h2>
                    <hr/>
                    <p className='truncate text-sm text-gray-600 mt-2'>Item Description...</p>
                  </div>
                  <p>
                    <span className='font-bold mr-1'>Item Value</span>
                  </p>
                </div>
              </div>
            </Link>
          </div> 
        )}
      </main>
   </div>
  )
}
