import React from 'react';
import UserProfile from "@/components/Profile";
import SearchInput from "@/components/SearchInput";
import Logo from "@/components/Logo";

const Navbar: React.FC = () => {
  const handleSearch = (query: string) => {
    console.log("Search query:", query);
  };

  return (
    <nav className="bg-white py-4 px-8 flex items-center justify-between">
      <Logo />
      <div className="flex-1 mx-8">
        <SearchInput onSearch={handleSearch} placeholder="Find a character..." />
      </div>
      <UserProfile />
    </nav>
  );
};

export default Navbar;
