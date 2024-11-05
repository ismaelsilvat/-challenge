"use client"
import React, {useEffect, useState} from 'react';
import CharacterCard from './CharacterCard';
import { Character } from '@/types/character';
import Grid from '@/components/Grid';
import Button from '@/components/Button';
import { useCharacters } from "@/contexts/CharacterContext";
import CharacterDetails from "@/features/character/components/CharacterDetails";
import SkeletonCard from "@/components/SkeletonCard";

type CharacterGridProps = {
  isFeaturedGrid?: boolean;
  className?: string;
};

const CharacterGrid: React.FC<CharacterGridProps> = ({ isFeaturedGrid, className = "bg-[#F1F2F3] p-10 md:p-20" }) => {
  const { isLoading, searchQuery, characters, featuredCharacters, page, setPage, totalPages, enableSearch, setEnableSearch } = useCharacters();
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  const handleViewProfile = (character: Character) => {
    setSelectedCharacter(character);
  };

  const handleBackToGrid = () => {
    setSelectedCharacter(null);
    setEnableSearch(true)
  };

  useEffect(() => {
    if (selectedCharacter && enableSearch) {
      setEnableSearch(false)
    }
  }, [enableSearch, selectedCharacter]);

  const handleNextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handlePreviousPage = () => {
    if (page > 1) setPage(page - 1);
  };

  if (selectedCharacter) {
    return <CharacterDetails character={selectedCharacter} onBack={handleBackToGrid} />;
  }

  return (
    <>
      <Grid
        title={(searchQuery && !isFeaturedGrid) ? `Search Results - ${searchQuery}` : undefined}
        className={className}
        items={isFeaturedGrid ? featuredCharacters : characters.length > 0 ? characters : Array.from({ length: 8 }) as Character[]}
        renderItem={(character: Character, index: number) => (
          isLoading ? (
            <SkeletonCard key={index} />
          ) : (
            <CharacterCard
              key={character._id}
              character={character}
              onViewProfile={() => handleViewProfile(character)}
            />
          )
        )}
      />
      {!isFeaturedGrid && characters.length > 0 && (
        <div className="flex justify-between items-center bg-[#F1F2F3] px-5 md:px-20 pb-10">
          <Button onClick={handlePreviousPage} disabled={page === 1}>
            Previous
          </Button>
          <span className="text-gray-700">Page {page} of {totalPages}</span>
          <Button onClick={handleNextPage} disabled={page === totalPages}>
            Next
          </Button>
        </div>
      )}
    </>
  );
};

export default CharacterGrid;
