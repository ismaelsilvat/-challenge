import { useCallback, useEffect, useMemo, useState } from "react";
import { useCharacters } from "@/features/character/contexts/CharacterContext";
import CharacterService from "@/features/character/services/character.service";
import {featuredNames} from "@/features/character/types/featuredNames";
import {BeautyAndTheBeastMovie, Belle} from "@/features/character/const/names";

export default function useLoadCharacters() {
  const { isLoading, characters, featuredCharacters, searchQuery, setIsLoading, setCharacters, setFeaturedCharacters } = useCharacters();
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const loadCharacters = useCallback(async () => {
    setIsLoading(true)
    const { data, totalPages: apiTotalPages } = await CharacterService.findAll(page, 8);
    setCharacters(data);
    setTotalPages(apiTotalPages);
    setIsLoading(false)
  }, [page]);

  const loadSearchCharacters = useCallback(async () => {
    setIsLoading(true)
    const results = await CharacterService.findByFilters({ name: searchQuery });
    setCharacters(results);
    setTotalPages(1);
    setPage(1);
    setIsLoading(false)
  }, [searchQuery]);

  const loadFeaturedCharacters = async () => {
    const characterPromises = featuredNames.map(name => CharacterService.findByFilters({ name, ...(name === Belle && { films: [BeautyAndTheBeastMovie] }) }));
    const results = await Promise.all(characterPromises);
    const featured = results.flatMap(result => result).filter(character => featuredNames.includes(character.name));
    setFeaturedCharacters(featured);
  };

  useEffect(() => {
    loadFeaturedCharacters()
  }, []);

  useEffect(() => {
    if (searchQuery) {
      loadSearchCharacters()
    }
    loadCharacters()
  }, [page, searchQuery]);

  return useMemo(() => ({
    isLoading,
    characters,
    featuredCharacters,
    page,
    setPage,
    totalPages,
    nextPage: handleNextPage,
    previousPage: handlePreviousPage,
    searchQuery,
  }), [characters, featuredCharacters])
};