"use client"
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Character } from "@/types/character";
import CharacterService from "@/features/character/services/character.service";

type CharacterContextType = {
  featuredCharacters: Character[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  characters: Character[];
};

const CharacterContext = createContext<CharacterContextType | undefined>(undefined);

export const CharacterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [featuredCharacters, setFeaturedCharacters] = useState<Character[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [characters, setCharacters] = useState<Character[]>([]);

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
    const searchCharactersByName = async () => {
      try {
        if (searchQuery) {
          const results = await CharacterService.findByFilters({ name: searchQuery });
          setCharacters(results);
        } else {
          const { data } = await CharacterService.findAll(1, 8);
          setCharacters(data);
        }
      } catch (error) {
        console.error('Failed to search characters:', error);
      }
    };

    searchCharactersByName();
  }, [searchQuery]);

  return (
    <CharacterContext.Provider value={{
      characters,
      featuredCharacters,
      searchQuery,
      setSearchQuery,
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
