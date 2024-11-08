"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Character } from "@/features/character/types/character";

type CharacterContextType = {
  featuredCharacters: Character[];
  setFeaturedCharacters: (featuredCharacters: Character[]) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  characters: Character[];
  setCharacters: (characters: Character[]) => void;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  setEnableSearch: (value: boolean) => void;
  enableSearch: boolean;
};

const CharacterContext = createContext<CharacterContextType | undefined>(undefined);

export const CharacterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [featuredCharacters, setFeaturedCharacters] = useState<Character[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [enableSearch, setEnableSearch] = useState<boolean>(true);

  return (
    <CharacterContext.Provider value={{
      characters,
      setCharacters,
      featuredCharacters,
      setFeaturedCharacters,
      searchQuery,
      setSearchQuery,
      isLoading,
      setIsLoading,
      enableSearch,
      setEnableSearch
    }}>
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacters = (): CharacterContextType => {
  const context = useContext(CharacterContext);
  if (!context) {
    throw new Error('useCharacters must be used within a CharacterProvider');
  }
  return context;
};
