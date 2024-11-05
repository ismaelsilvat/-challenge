import React from 'react';
import { useCharacters } from "@/contexts/CharacterContext";

type SearchInputProps = {
  placeholder?: string;
};

const SearchInput: React.FC<SearchInputProps> = ({ placeholder = 'Search...' }) => {
  const { searchQuery, setSearchQuery } = useCharacters();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="w-full h-[48px] px-4 py-2 text-gray-800 font-medium rounded-full bg-[#F1F2F3] border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {searchQuery && (
        <button
          onClick={clearSearch}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
          aria-label="Clear search"
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default SearchInput;
