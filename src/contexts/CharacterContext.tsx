"use client"
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Character } from "@/types/character";
import CharacterService from "@/features/character/services/character.service";

type CharacterContextType = {
  featuredCharacters: Character[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  characters: Character[];
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
};

const CharacterContext = createContext<CharacterContextType | undefined>(undefined);

export const CharacterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [featuredCharacters, setFeaturedCharacters] = useState<Character[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const loadFeaturedCharacters = async () => {
      try {
        const featuredNames = ['Belle', 'Beast', 'Mickey Mouse', 'Donald Duck'];
        const characterPromises = featuredNames.map(name => CharacterService.findByFilters({ name, ...(name === "Belle" && {films: ["Beauty and the Beast"]}) }));
        const results = await Promise.all(characterPromises);
        const featured = results.flatMap(result => result).filter(character => featuredNames.includes(character.name));
        setFeaturedCharacters(featured);
      } catch (error) {
        console.error('Failed to load featured characters:', error);
      }
    };

    loadFeaturedCharacters();
  }, []);

  useEffect(() => {
    const loadCharacters = async () => {
      try {
        if (searchQuery) {
          const results = await CharacterService.findByFilters({ name: searchQuery });
          setCharacters(results);
          setTotalPages(1);
          setPage(1);
        } else {
          const { data, totalPages: apiTotalPages } = await CharacterService.findAll(page, 8);
          setCharacters(data);
          setTotalPages(apiTotalPages);
        }
      } catch (error) {
        console.error('Failed to load characters:', error);
      }
    };

    loadCharacters();
  }, [searchQuery, page]);

  return (
    <CharacterContext.Provider value={{
      characters,
      featuredCharacters,
      searchQuery,
      setSearchQuery,
      page,
      setPage,
      totalPages,
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
