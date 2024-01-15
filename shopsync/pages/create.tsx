import Header from '@/components/Header'
import React, { FormEvent, useState } from 'react'

type Props = {}

function Create({}: Props) {
    const [selectedNft, setSelectNft] = useState<string>();

    const handleCreateListing = async (e:FormEvent<HTMLFormElement>) => {
        
    }
  return (
    <div>
        <Header/>

        <main className='max-w-6xl mx-auto p-10 pt-2'>
            <h1 className='text-4xl font-bold'>List an Item</h1>
            <h2 className='text-xl font-semibold pt-5'>Select an Item you would like to Sell</h2>
            <hr className='mb-5' />
            <p className='mb-5'>
                Below you will find the NFT's you own in your wallet
            </p>
            <div className='flex overflow-x-scroll space-x-2 p-4' >
                <p className='text-lg truncated font-bold'>My NFTs...</p>
            </div>
            <form onSubmit={handleCreateListing}>
                <div className='flex flex-col p-10 '>
                    <div className='grid grid-cols-2 p-1 gap-5'>
                        <label className='border-r font-light'>Direct Listing / Fixed Price</label>
                        <input type='radio' 
                            name='listingType' 
                            value='directListing'
                            className='ml-auto h-10 w-10'
                        />

                        <label className='border-r font-light'>Auction</label>
                        <input type='radio' 
                            name='listingType' 
                            value='auctionListing'
                            className='ml-auto h-10 w-10'
                        />

                        <label className='border-r font-light'>Price</label>
                        <input type='text' 
                            placeholder='0.05' 
                            className='bg-gray-100 p-5'
                        />

                        <button className='bg-blue-600 text-white rounded-lg p-4 mt-8'
                            type='submit'
                        >
                            Create Listing
                        </button>
                    </div>
                </div>
            </form>
        </main>
    </div>
  )
}

export default Create