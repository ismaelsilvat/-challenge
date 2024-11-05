import React from 'react';
import UserProfile from "@/components/Profile";
import SearchInput from "@/components/SearchInput";
import Logo from "@/components/Logo";

const Navbar: React.FC = () => (
  <nav className="bg-white py-4 flex flex-wrap md:flex-nowrap items-center justify-between">
    <Logo/>
    <div className="flex-1 mx-8 hidden md:flex">
      <SearchInput placeholder="Find a character..."/>
    </div>
    <UserProfile/>
    <div className="w-full mt-4 flex md:hidden">
      <SearchInput placeholder="Find a character..."/>
    </div>
  </nav>
);

export default Navbar;
