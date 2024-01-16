import Header from "@/components/Header";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import React from "react";

function ListingPage(){
    const router = useRouter();
    const listingId = 1;
    return(
        <div>
            <Header />

            <main className="max-w-6xl mx-auto p-2 flex flex-col lg:flex-row space-y-10 space-x-5 pr-10">
                <div className="p-10 border mx-auto lg:mx-0 max-w-md lg:max-w-xl">
                    <p>Image</p>
                </div>

                <section className="flex-1 space-y-5 pb-20 lg:pb-0">
                    <div>
                        <h1 className="text-xl font-bold">Item Name 1</h1>
                        <p className="text-gray-600">Item Description</p>
                        <p className="flex items-center space-x-2 text-xs sm:text-base">
                            <UserCircleIcon className="h-5"/>
                            <span className="font-bold pr-5">Seller Address</span>
                        </p>
                    </div>

                    <div className="grid grid-cols-2 items-center py-2">
                        <p className="font-bold">Listing Type:</p>
                        <p>Direct Listing</p>
                        <p className="font-bold">Buy it Now Price:</p>
                        <p className="text-4xl font-bold">0.005 MATIC</p>

                        <button className="col-start-2 mt-2 bg-blue-600 font-bold text-white rounded-full w-44 py-4 px-10">Buy Now</button>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default ListingPage;