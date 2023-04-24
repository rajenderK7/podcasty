import React from "react";
import { BiSearch } from "react-icons/bi";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs/app-beta";
import LoginButton from "./LoginButton";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-[#f4f4f1] sticky top-0 z-50 flex border-b border-b-black justify justify-between items-center shadow-md h-[58px] p-3 text-xl">
      <div className="flex items-center justify-between">
        <h1 className="ml-4 cursor-pointer font-bold">Podcasty</h1>
      </div>

      <div className="flex border-black border items-center rounded-full w-[50%] p-1 text-base bg-white">
        <input
          className="flex-grow pl-5 bg-transparent outline-none"
          type="text"
          placeholder="Search your liking.."
        />
        <BiSearch className="mx-2 cursor-pointer text-2xl" />
      </div>

      <div className="flex justify-end items-center space-x-3">
        <Link
          href="/explore"
          className="text-xl hover:cursor-pointer font-semibold hover:scale-110 duration-150"
        >
          Explore
        </Link>
        <Link
          href="/admin"
          className="text-xl hover:cursor-pointer font-semibold hover:scale-110 duration-150"
        >
          Admin
        </Link>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <LoginButton />
        </SignedOut>
      </div>
    </header>
  );
};

export default Header;
