import React from 'react';
import CharacterCard from './CharacterCard';
import Grid from "@/components/Grid";
import { Character } from "@/types/character";
import {useCharacters} from "@/contexts/CharacterContext";

type CharacterGridProps = {
  className?: string;
  data?: Character[];
};

const CharacterGrid: React.FC<CharacterGridProps> = ({ data, className = "bg-[#F1F2F3] px-20 pb-20 pt-10" }) => {
  const { characters, searchQuery } = useCharacters();

  const handleViewProfile = (characterId: number) => {
    console.log(`View profile of character with ID: ${characterId}`);
  };

  return (
    <Grid
      title={searchQuery && !data && `Search Results - ${searchQuery}`}
      className={className}
      items={data ?? characters}
      renderItem={(character) => (
        <CharacterCard
          key={character._id}
          character={character}
          onViewProfile={() => handleViewProfile(character._id)}
        />
      )}
      columns={4}
    />
  );
};

export default CharacterGrid;
