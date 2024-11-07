"use client"
import React, {useEffect, useState} from 'react';
import CharacterCard from './CharacterCard';
import { Character } from '@/features/character/types/character';
import Grid from '@/components/Grid';
import Button from '@/components/Button';
import { useCharacters } from "@/features/character/contexts/CharacterContext";
import CharacterDetails from "@/features/character/components/CharacterDetails";
import SkeletonCard from "@/components/SkeletonCard";
import { strings } from "@/const/strings";
import useLoadCharacters from "@/features/character/hooks/useLoadCharacters";

type CharacterGridProps = {
  isFeaturedGrid?: boolean;
  className?: string;
};

const CharacterGrid: React.FC<CharacterGridProps> = ({ isFeaturedGrid, className = "bg-[#F1F2F3] p-10 md:p-20" }) => {
  const { searchQuery, featuredCharacters, enableSearch, setEnableSearch } = useCharacters();
  const { isLoading, characters, page, previousPage, nextPage, totalPages } = useLoadCharacters();
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

  if (selectedCharacter) {
    return <CharacterDetails character={selectedCharacter} onBack={handleBackToGrid} />;
  }

  return (
    <>
      <Grid
        title={(searchQuery && !isFeaturedGrid) ? `${strings.searchResults} - ${searchQuery}` : undefined}
        className={className}
        items={isFeaturedGrid ? featuredCharacters : !isLoading ? characters : Array.from({ length: 8 }) as Character[]}
        renderItem={(character: Character, index: number) => (
          isLoading ? (
            <SkeletonCard key={index} />
          ) : (
            <CharacterCard
              key={character?._id || index}
              character={character}
              onViewProfile={() => handleViewProfile(character)}
            />
          )
        )}
      />
      {!isFeaturedGrid && characters.length > 0 && (
        <div className="flex justify-between items-center bg-grayBackground px-5 md:px-20 pb-10">
          <Button onClick={previousPage} disabled={page === 1}>
            {strings.previous}
          </Button>
          <span className="text-defaultText">{strings.page(page, totalPages)}</span>
          <Button onClick={nextPage} disabled={page === totalPages}>
            {strings.next}
          </Button>
        </div>
      )}
    </>
  );
};

export default CharacterGrid;
