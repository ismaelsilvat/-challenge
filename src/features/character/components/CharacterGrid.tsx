import React, { useState } from 'react';
import CharacterCard from './CharacterCard';
import { Character } from '@/types/character';
import Grid from '@/components/Grid';
import Button from '@/components/Button';
import { useCharacters } from "@/contexts/CharacterContext";
import SelectedCharacter from "@/features/character/components/SelectedCharacter";

type CharacterGridProps = {
  data?: Character[];
  className?: string;
};

const CharacterGrid: React.FC<CharacterGridProps> = ({ data, className = "bg-[#F1F2F3] p-10 md:p-20" }) => {
  const { searchQuery, characters, page, setPage, totalPages} = useCharacters();
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  const handleViewProfile = (character: Character) => {
    setSelectedCharacter(character);
  };

  const handleBackToGrid = () => {
    setSelectedCharacter(null);
  };

  const handleNextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handlePreviousPage = () => {
    if (page > 1) setPage(page - 1);
  };

  if (selectedCharacter) {
    return  <SelectedCharacter selectedCharacter={selectedCharacter} onBack={handleBackToGrid} />;
  }

  return (
    <>
      <Grid
        title={(searchQuery && !data) ? `Search Results - ${searchQuery}` : undefined}
        className={className}
        items={data ?? characters}
        renderItem={(character) => (
          <CharacterCard
            key={character._id}
            character={character}
            onViewProfile={() => handleViewProfile(character)}
          />
        )}
      />
      {!data && characters.length > 0 && (
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
