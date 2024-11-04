"use client"
import FeaturedCharacters from "@/features/character/components/FeaturedCharacters";
import CharacterGrid from "@/features/character/components/CharacterGrid";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {

  return (
    <main className="container mx-auto px-4">
      <Navbar />
      <CharacterGrid />
      <FeaturedCharacters />
      <Footer/>
    </main>
  );
}
