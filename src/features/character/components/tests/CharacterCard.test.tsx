import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CharacterCard from '../CharacterCard';
import { Character } from "@/features/character/types/character";

const mockCharacter: Character = {
  _id: 1,
  name: 'Mickey Mouse',
  imageUrl: 'mickey.jpg',
  films: ['Fantasia'],
  shortFilms: [],
  tvShows: [],
  sourceUrl: 'https://example.com',
  videoGames: [],
  parkAttractions: [],
  allies: [],
  enemies: [],
  createdAt: '',
  updatedAt: ''
};

describe('CharacterCard', () => {
  test('renders character information correctly', () => {
    render(<CharacterCard character={mockCharacter} onViewProfile={jest.fn()} />);

    expect(screen.getByText('Mickey Mouse')).toBeInTheDocument();
    expect(screen.getByText('Fantasia')).toBeInTheDocument();
    expect(screen.getByText('VIEW PROFILE')).toBeInTheDocument();
  });

  test('calls onViewProfile when VIEW PROFILE is clicked', () => {
    const onViewProfileMock = jest.fn();
    render(<CharacterCard character={mockCharacter} onViewProfile={onViewProfileMock} />);

    const viewProfileButton = screen.getByText('VIEW PROFILE');
    fireEvent.click(viewProfileButton);

    expect(onViewProfileMock).toHaveBeenCalledTimes(1);
  });
});
