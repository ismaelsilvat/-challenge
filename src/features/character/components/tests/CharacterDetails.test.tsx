import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import CharacterDetails from "@/features/character/components/CharacterDetails";
import { Character } from "@/types/character";

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

describe('CharacterDetails', () => {
  const onBackMock = jest.fn();

  test('renders character details correctly', () => {
    render(<CharacterDetails character={mockCharacter} onBack={onBackMock} />);

    expect(screen.getByText('Mickey Mouse')).toBeInTheDocument();
    expect(screen.getByText('Fantasia')).toBeInTheDocument();
  });

  test('renders Explore More Character Details link', () => {
    render(<CharacterDetails character={mockCharacter} onBack={onBackMock} />);

    expect(screen.getByRole('button', { name: 'Explore More Character Details' })).toBeInTheDocument();
  });

  test('calls onBack when Back is clicked', () => {
    render(<CharacterDetails character={mockCharacter} onBack={onBackMock} />);

    const onBackButton = screen.getByText('Back');
    fireEvent.click(onBackButton);

    expect(onBackMock).toHaveBeenCalledTimes(1);
  });
});
