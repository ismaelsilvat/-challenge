import React from 'react';
import CharacterGrid from './CharacterGrid';
import { useCharacters } from "@/contexts/CharacterContext";

const FeaturedCharacters: React.FC = () => {
  const { featuredCharacters } = useCharacters();

  return (
    <section className="bg-[#054553] pt-10 pb-10 px-20">
      <h2 className="text-center text-2xl font-bold text-white mb-6">Featured Characters!</h2>
      <CharacterGrid data={featuredCharacters} className="mt-1 bg-[#054553]" />
    </section>
  );
};

export default FeaturedCharacters;
