import React, {useEffect, useState} from 'react';
import UserProfile from "@/components/Profile";
import SearchInput from "@/components/SearchInput";
import Logo from "@/components/Logo";
import { useCharacters } from "@/contexts/CharacterContext";
import useDebounce from "@/hooks/useDebounce";
import {strings} from "@/const/strings";

const Navbar: React.FC = () => {
  const { setSearchQuery, enableSearch } = useCharacters();
  const [search, setSearch] = useState("");

  const debouncedSearchQuery = useDebounce(search, 300)

  useEffect(() => {
    setSearchQuery(debouncedSearchQuery)
  }, [debouncedSearchQuery]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSearch('')
  };
  return (
    <nav className="bg-background py-4 flex flex-wrap md:flex-nowrap items-center justify-between">
      <Logo/>
      <div className="flex-1 mx-8 hidden md:flex">
        <SearchInput
          value={search}
          onChange={handleInputChange}
          onClear={clearSearch}
          disabled={!enableSearch}
          placeholder={strings.findCharacter}
          className={enableSearch ? "" : "opacity-50"}
        />
      </div>
      <UserProfile/>
      <div className="w-full mt-4 flex md:hidden">
        <SearchInput
          value={search}
          onChange={handleInputChange}
          onClear={clearSearch}
          disabled={!enableSearch}
          placeholder={strings.findCharacter}
          className={enableSearch ? "" : "opacity-50"}
        />
      </div>
    </nav>
  )
};

export default Navbar;
