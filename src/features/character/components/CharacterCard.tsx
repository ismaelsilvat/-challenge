import React from 'react';
import { Character } from "@/types/character";

type CharacterCardProps = {
  character: Character;
  onViewProfile: () => void;
};

const CharacterCard: React.FC<CharacterCardProps> = ({ character, onViewProfile }) => {
  const featuredFilms = character.films.slice(0, 3).join(', ') + (character.films.length > 3 ? '...' : '');
  return (
    <div
      className="w-full md:w-[248px] md:min-h-[416px] flex flex-col items-center bg-white shadow-md overflow-hidden"
    >
      <img src={character.imageUrl} alt={character.name} onClick={onViewProfile} className="w-full md:w-[248px] min-h-[248px] max-h-[248px] object-cover cursor-pointer" />
      <div className="p-4 flex flex-col gap-2 justify-center text-center">
        <h3 className="font-lato text-[18px] font-bold text-gray-600">
          {character.name}
        </h3>
        <p className=" font-lato text-[15px] font-semibold leading-[16px] text-gray-600 mt-2">
          Featured Films
        </p>
        <p className="font-lato text-[15px] leading-[16px] text-gray-600 line-clamp-1">
          {featuredFilms.length > 0 ? featuredFilms : "None"}
        </p>
        <button
          onClick={onViewProfile}
          className="mt-4 font-lato text-[12px] font-extrabold leading-[14.4px] text-gray-600 underline hover:text-gray-800"
        >
          VIEW PROFILE
        </button>
      </div>
    </div>
  );
};

export default CharacterCard;
