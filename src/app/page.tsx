"use client"
import FeaturedCharacters from "@/features/character/components/FeaturedCharacters";
import CharacterGrid from "@/features/character/components/CharacterGrid";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

export default function Home() {

  return (
    <Container className="px-4">
      <Navbar />
      <CharacterGrid />
      <FeaturedCharacters />
      <Footer/>
    </Container>
  );
}
