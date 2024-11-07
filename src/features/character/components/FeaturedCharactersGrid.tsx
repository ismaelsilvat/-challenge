import React from 'react';
import CharacterGrid from './CharacterGrid';

const FeaturedCharactersGrid: React.FC = () => (
  <section className="bg-primary pt-10 pb-10 px-10 md:px-20">
    <h2 className="text-center text-xl text-white mb-6">Featured Characters!</h2>
    <CharacterGrid isFeaturedGrid className="mt-1 bg-primary" />
  </section>
);

export default FeaturedCharactersGrid;
