import { Character } from "@/features/character/types/character";
import api from "@/lib/api";

type FindAllPromiseResponse = {
  data: Character[];
  totalPages: number
}

type FindAllGetResponse = {
  data: Character[],
  info: {
    totalPages: number,
    count: number,
    previousPage:string,
    nextPage: string,
  }
}

type FindByFilters = {
  name?: string,
  films?: string[]
}


class CharacterService {
  async findAll(page: number = 1, pageSize: number = 50): Promise<FindAllPromiseResponse> {
    const response = await api.get<FindAllGetResponse>('/character', { params: { page, pageSize } });
    return {
      data: response.data.data,
      totalPages: response.data.info.totalPages,
    };
  }

  async findByFilters(filters : FindByFilters): Promise<Character[]> {
    const response = await api.get<{ data: Character[] }>('/character', { params: { ...filters } });
    return response.data.data;
  }
}

export default new CharacterService();
