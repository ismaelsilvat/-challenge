import React, { useState } from 'react';
import CharacterCard from './CharacterCard';
import { Character } from '@/types/character';
import Grid from '@/components/Grid';
import Button from '@/components/Button';
import {useCharacters} from "@/contexts/CharacterContext";

type CharacterGridProps = {
  data?: Character[];
  className?: string;
};

const CharacterGrid: React.FC<CharacterGridProps> = ({ data, className = "bg-[#F1F2F3] p-20" }) => {
  const { characters, page, setPage, totalPages} = useCharacters();
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
    return (
      <div className={`container mx-auto bg-[#F1F2F3] p-20`}>
        <Button onClick={handleBackToGrid}>Voltar</Button>
        <div
          className="flex flex-col md:flex-row items-center md:items-start md:space-x-8 mt-5">
          <img
            src={selectedCharacter.imageUrl}
            alt={selectedCharacter.name}
            className="w-2/5 h-full rounded-lg shadow-md object-cover"
          />
          <div className="mt-4 w-3/5 md:mt-0">
            <h1 className="text-4xl text-gray-800">{selectedCharacter.name}</h1>
            {/*<p className="text-gray-500 mt-1">Last Updated {selectedCharacter.lastUpdated}</p>*/}

            <div className="mt-6 space-y-4">
              {selectedCharacter.films.length > 1  && (
                <div>
                  <h2 className="text-sm font-semibold text-gray-800">Featured Films</h2>
                  <ul className="list-disc list-inside text-gray-700 mt-2 font-semibold  text-sm">
                    {selectedCharacter.films.map(film => (
                      <li key={film}>{film}</li>
                    ))}
                  </ul>
                </div>
              )}
              {selectedCharacter.shortFilms.length > 1 && (
                <div>
                  <h2 className="text-sm font-semibold text-gray-800">Short Films</h2>
                  <ul className="list-disc list-inside text-gray-700 mt-2 font-semibold text-sm">
                    {selectedCharacter.shortFilms.map(short => (
                      <li key={short}>{short}</li>
                    ))}
                  </ul>
                </div>
              )}
              {selectedCharacter.tvShows.length > 1 && (
                <div>
                  <h2 className="text-sm font-semibold text-gray-800">TV Shows</h2>
                  <ul className="list-disc list-inside text-gray-700 mt-2 font-semibold text-sm">
                    {selectedCharacter.tvShows.map(show => (
                      <li key={show}>{show}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="mt-6 flex space-x-4 ml-[40%]">
          <Button onClick={() => window.open(selectedCharacter.sourceUrl, '_blank')}>
            Explore More Character Details
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Grid
        className={className}
        items={data ?? characters}
        renderItem={(character) => (
          <CharacterCard
            key={character._id}
            character={character}
            onViewProfile={() => handleViewProfile(character)}
          />
        )}
        columns={4}
      />
      {!data && (
        <div className="flex justify-between mt-2 mb-4">
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
