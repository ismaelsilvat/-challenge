import React from 'react';
import CharacterGrid from "@/features/character/components/CharacterGrid";
import FeaturedCharactersGrid from "@/features/character/components/FeaturedCharactersGrid";
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Characters = () => {
  return (
    <Container className="px-4">
      <Navbar />
      <CharacterGrid />
      <FeaturedCharactersGrid />
      <Footer/>
    </Container>
  );
};

export default Characters;