import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import { CharacterProvider } from '@/features/character/contexts/CharacterContext';
import CharacterService from '@/features/character/services/character.service';
import CharacterGrid from "@/features/character/components/CharacterGrid";

describe('CharacterGrid', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderWithContext = (ui: React.ReactElement) => {
    return render(<CharacterProvider>{ui}</CharacterProvider>);
  };

  test('renders the character grid with characters', async () => {
    renderWithContext(<CharacterGrid />);
    const characterCards = await screen.findAllByRole('img');
    expect(characterCards.length).toBeGreaterThan(0);
  });

  test('navigates to the next and previous page', async () => {
    renderWithContext(<CharacterGrid />);

    const nextButton = await screen.findByText('Next');
    fireEvent.click(nextButton);

    expect(CharacterService.findAll).toHaveBeenCalledWith(1, 8);

    const previousButton = screen.getByText('Previous');
    fireEvent.click(previousButton);

    expect(CharacterService.findAll).toHaveBeenCalledWith(1, 8);
  });

  test('displays character details when a character is selected', async () => {
    renderWithContext(<CharacterGrid />);

    const characterCard = await screen.findByText('Mickey Mouse');
    fireEvent.click(characterCard);

    expect(screen.getByText('Mickey Mouse')).toBeInTheDocument();
    expect(screen.getByText('Fantasia')).toBeInTheDocument();
  });

  test('returns to character grid when back button is clicked', async () => {
    renderWithContext(<CharacterGrid />);

    const characterCard = await screen.findByText('Mickey Mouse');

    const viewProfileButton = within(characterCard.closest('div')!).getByText('VIEW PROFILE');
    fireEvent.click(viewProfileButton);

    expect(screen.queryByText('<li>Fantasia</li>')).not.toBeInTheDocument();

    const backButton = screen.getByText('Back');
    fireEvent.click(backButton);

    expect(screen.getByText('Mickey Mouse')).toBeInTheDocument();
  });
});
