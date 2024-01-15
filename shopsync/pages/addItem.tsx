import Header from '@/components/Header'
import { Contract } from 'ethers';
import React, { FormEvent, useState } from 'react'

type Props = {}

function addItem({}: Props) {
    const [preview, setPreview] = useState<string>();
    const [image, setImage] = useState<File>();

    const mintNft = async (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!image)
        {
            alert('Please include an image!');
            return;
        }
    }

  return (
    <div>
        <Header />
        <main className='max-w-6xl mx-auto border'>
            <h1 className='text-4xl font-bold'>Add an Item to the Marketplace</h1>
            <h2 className='text-xl font-semibold pt-5'>Item Details</h2>
            <p className='pb-5 '>
                By adding an item to the marketplace, you're essentially minting on 
                NFT of the item into your wallet which we can then list for sale!
            </p>
            <div className='flex flex-col justify-center items-center md:flex-row md:space-x-5 pt-5'>
                <img
                    className='border h-80 w-80 object-contain'
                    src={preview || "https://links.papareact.com/ucj"}
                    alt=''
                />
                <form onSubmit={mintNft} className='flex flex-col flex-1 p-2 space-y-2 justify-center'>
                    <label className='font-light'>
                        Name of Item
                    </label>
                    <input className='formField' 
                        placeholder='Name of item...' 
                        type='text' 
                        name='name'
                        id='name'
                    />

                    <label className='font-light'>
                        Description
                    </label>
                    <input className='formField' 
                        placeholder='Enter Description' 
                        type='text' 
                        name='description'
                        id='description'
                    />

                    <label className='font-light'>
                        Image of the Item
                    </label>
                    <input className='' type='file' 
                        onChange={(e) => {
                            if(e.target.files?.[0]){
                                setPreview(URL.createObjectURL(e.target.files[0]));
                                setImage(e.target.files[0]);
                            }
                        }}
                    />

                    <button type='submit' className='bg-blue-300 font-bold text-white rounded-full py-4 px-10 w-56 md:mt-auto mx-auto mt-5 md:ml-auto'>Add/Mint Item</button>
                </form>
            </div>
        </main>
    </div>
  )
}

export default addItem