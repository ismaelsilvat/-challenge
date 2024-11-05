import { Character } from "@/types/character";
import api from "@/services/api";

class CharacterService {
  async findAll(page: number = 1, pageSize: number = 50): Promise<{ data: Character[]; totalPages: number }> {
    const response = await api.get<
      { data: Character[], info: {
        totalPages: number,
        count: number,
        previousPage:string,
        nextPage: string,
      }}
    >('/character', { params: { page, pageSize } });
    return {
      data: response.data.data,
      totalPages: response.data.info.totalPages,
    };
  }

  async findByFilters(filters :{ name?: string, films?: string[] }): Promise<Character[]> {
    const response = await api.get<{data: Character[]}>('/character', { params: { ...filters } });
    return response.data.data ;
  }
}

export default new CharacterService();
