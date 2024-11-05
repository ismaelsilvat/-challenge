import React from 'react';
import Button from "@/components/Button";
import { Character } from "@/types/character";

type SelectedCharacterProps = {
  selectedCharacter: Character;
  onBack: () => void;
};

const SelectedCharacter: React.FC<SelectedCharacterProps> = ({ selectedCharacter, onBack }) => (
  <div className={`container mx-auto bg-[#F1F2F3] p-10 md:p-20`}>
    <Button onClick={onBack}>Back</Button>
    <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8 mt-5">
      <img
        src={selectedCharacter.imageUrl}
        alt={selectedCharacter.name}
        className="w-full md:w-2/5 h-full rounded-lg shadow-md object-cover"
      />
      <div className="mt-4 w-full md:w-3/5 md:mt-0">
        <h1 className="text-4xl text-gray-800">{selectedCharacter.name}</h1>
        <div className="mt-6 space-y-4">
          {selectedCharacter.films.length > 1 && (
            <div>
              <h2 className="text-sm font-semibold text-gray-800">Featured Films</h2>
              <ul className="list-disc list-inside text-gray-700 mt-2 font-semibold text-sm">
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
    <div className="mt-6 flex space-x-4 md:ml-[40%]">
      <Button onClick={() => window.open(selectedCharacter.sourceUrl, '_blank')}>
        Explore More Character Details
      </Button>
    </div>
  </div>
);

export default SelectedCharacter;
