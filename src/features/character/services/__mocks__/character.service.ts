import { Character } from '@/types/character';

const mockCharacters: Character[] = [
  {
    _id: 1,
    name: 'Mickey Mouse',
    imageUrl: 'mickey.jpg',
    films: ['Fantasia'],
    shortFilms: [],
    tvShows: [],
    sourceUrl: '',
    videoGames: [],
    parkAttractions: [],
    allies: [],
    enemies: [],
    createdAt: '',
    updatedAt: ''
  },
  { _id: 2,
    name: 'Donald Duck',
    imageUrl: 'donald.jpg',
    films: ['The Wise Little Hen'],
    shortFilms: [],
    tvShows: [],
    sourceUrl: '',
    videoGames: [],
    parkAttractions: [],
    allies: [],
    enemies: [],
    createdAt: '',
    updatedAt: ''
  },
];

export default {
  findAll: jest.fn().mockResolvedValue({ data: mockCharacters, totalPages: 1 }),
  findByFilters: jest.fn().mockResolvedValue(mockCharacters),
  findById: jest.fn().mockResolvedValue(mockCharacters[0]),
};