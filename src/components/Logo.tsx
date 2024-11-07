import React from 'react';
import Link from 'next/link';
import {useCharacters} from "@/features/character/contexts/CharacterContext";

const Logo: React.FC = () => {
  const { setEnableSearch } = useCharacters()

  const handleEnableSearch = () => {
    setEnableSearch(true)
  }

  return (
    <Link href="/" onClick={handleEnableSearch}>
      <img src="/logo.png" alt="Disney Logo" className="h-10 w-auto"/>
    </Link>
  )
};

export default Logo;
