import React from "react";
import { useAddress, useDisconnect, useConnect } from "@thirdweb-dev/react";
import Link from "next/link";
import Image from "next/image";
import {
  BellIcon,
  ShoppingCartIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

type Props = {};

function Header({}: Props) {
  //const connectWithMetamask = useConnect();
  //const disconnect = useDisconnect();
  //const address = useAddress();
  const address = false;

  return (
    <div className="max-w-6xl mx-auto p-2">
      <nav className="flex justify-between">
        <div className="flex items-center space-x-2 text-sm">
          {address ? (
            <button className="connectWalletBtn">Hi, {address}</button>
          ) : (
            <button className="connectWalletBtn">Connect your wallet</button>
          )}
          <p className="headerLink">Daily Deals</p>
          <p className="headerLink">Help & Contact</p>
        </div>

        <div className="flex items-center space-x-4 text-sm">
          <p className="headerLink">Ship To</p>
          <p className="headerLink">Sell</p>
          <p className="headerLink">Watchlist</p>
          <Link href="/addItem" className="flex items-center hover:link">
            Add to inventory
            <ChevronDownIcon className="h-4" />
          </Link>
          <BellIcon className="h-6 w-6" />
          <ShoppingCartIcon className="h-6 w-6" />
        </div>
      </nav>

      <hr className="mt-2" />

      <section className="flex items-center space-x-2 py-5">
        <div className="h-16 w-16 sm:w-28 md:w-44 cursor-pointer flex-shrink-0">
          <Link href="/">
            <Image
              className="h-full w-full object-contain"
              alt="Thirdweb logo"
              src="https://links.papareact.com/bdb"
              width={100}
              height={100}
            />
          </Link>
        </div>
        <button className="hidden lg:flex items-center space-x-2 w-20">
          <p className="text-gray-600 text-sm">Shop by Category</p>
          <ChevronDownIcon className="h-4 flex-shrink-0" />
        </button>
        <div
          className="flex items-center space-x-2 px-2 md:px-5 
                        py-2 border-black border-2 flex-1"
        >
          <MagnifyingGlassIcon className="w-5 text-gray-400" />
          <input
            className="flex-1 outline-none"
            placeholder="Search for Anything"
            type="text"
          />
        </div>
        <button className="hidden sm:inline bg-blue-600 text-white px-5 md:px-10 py-2 border-2 border-blue-600 rounded-sm">
          Search
        </button>
        <Link href="/create">
          <button className="border-2 border-blue-600 px-5 md:px-10 py-2 text-blue-600 hover:bg-blue-600/50 hover:text-white cursor-pointer rounded-sm">List Item</button>
        </Link>
      </section>
    </div>
  );
}

export default Header;
