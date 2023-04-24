import { BiSearch } from "react-icons/bi";
import Link from "next/link";
import UserProfile from "./UserProfile";
import Search from "./Search";

const Header = () => {
  return (
    <header className="bg-[#f4f4f1] sticky top-0 z-50 flex border-b border-b-black justify justify-between items-center shadow-md h-[58px] p-3 lg:text-xl">
      <div className="flex items-center justify-between">
        <Link href="/" className="cursor-pointer font-bold">
          Podcasty
        </Link>
      </div>

      <Search />

      <div className="lg:text-lg flex justify-end items-center space-x-3 underline">
        <Link
          href="/favorites"
          className="hover:cursor-pointer font-semibold hover:scale-110 duration-150"
        >
          Favorites
        </Link>
        <Link
          href="/explore"
          className="hover:cursor-pointer font-semibold hover:scale-110 duration-150"
        >
          Explore
        </Link>
        <Link
          href="/admin"
          className="hover:cursor-pointer font-semibold hover:scale-110 duration-150 mr-3"
        >
          Admin
        </Link>
        <UserProfile />
      </div>
    </header>
  );
};

export default Header;
