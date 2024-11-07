import {useEffect, useMemo, useState} from "react";
import {useCharacters} from "@/features/character/contexts/CharacterContext";

export default function useLoadCharacters() {
  const { isLoading, characters, loadCharacters, searchQuery } = useCharacters();
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

  useEffect(() => {
    loadCharacters(page, setPage, setTotalPages)
  }, [page, searchQuery]);

  return useMemo(() => {
    return {
      isLoading,
      characters,
      page,
      setPage,
      totalPages,
      nextPage: handleNextPage,
      previousPage: handlePreviousPage,
      searchQuery,
    }
  }, [characters]);
};