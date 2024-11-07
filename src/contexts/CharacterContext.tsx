"use client"
import React, { createContext, useContext, useEffect, useState, ReactNode, useCallback } from 'react';
import { Character } from "@/features/character/types/character";
import CharacterService from "@/features/character/services/character.service";
import {featuredNames} from "@/features/character/types/featuredNames";

type CharacterContextType = {
  featuredCharacters: Character[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  characters: Character[];
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
  isLoading: boolean;
  setEnableSearch: (value: boolean) => void;
  enableSearch: boolean;
};

const CharacterContext = createContext<CharacterContextType | undefined>(undefined);

export const CharacterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [featuredCharacters, setFeaturedCharacters] = useState<Character[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [enableSearch, setEnableSearch] = useState<boolean>(true);

  const loadCharacters = useCallback(async () => {
    setIsLoading(true)
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
    setIsLoading(false)
  }, [searchQuery, page]);

  const loadFeaturedCharacters = async () => {
    const characterPromises = featuredNames.map(name => CharacterService.findByFilters({ name, ...(name === "Belle" && {films: ["Beauty and the Beast"]}) }));
    const results = await Promise.all(characterPromises);
    const featured = results.flatMap(result => result).filter(character => featuredNames.includes(character.name));
    setFeaturedCharacters(featured);
  };

  useEffect(() => {
    loadFeaturedCharacters();
    loadCharacters()
  }, []);

  useEffect(() => {
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
      isLoading,
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
