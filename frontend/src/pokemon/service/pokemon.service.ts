import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL + '/pokemon';

export interface Pokemon {
  id: number;
  name: string;
  type: string;
}

class PokemonService {
  async getAllPokemons(): Promise<Pokemon[]> {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des pokémons:', error);
      throw new Error('Erreur lors de la récupération des pokémons');
    }
  }

  async getPokemonById(id: number): Promise<Pokemon> {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la récupération du pokémon avec l'ID ${id}:`, error);
      throw new Error('Erreur lors de la récupération du pokémon');
    }
  }

  async createPokemon(pokemon: Omit<Pokemon, 'id'>): Promise<Pokemon> {
    try {
      const response = await axios.post(API_URL, pokemon);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la création du pokémon:', error);
      throw new Error('Erreur lors de la création du pokémon');
    }
  }

  async updatePokemon(id: number, pokemon: Partial<Pokemon>): Promise<Pokemon> {
    try {
      const response = await axios.patch(`${API_URL}/${id}`, pokemon);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la modification du pokémon avec l'ID ${id}:`, error);
      throw new Error('Erreur lors de la modification du pokémon');
    }
  }

  async deletePokemon(id: number): Promise<void> {
    try {
      await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
      console.error(`Erreur lors de la suppression du pokémon avec l'ID ${id}:`, error);
      throw new Error('Erreur lors de la suppression du pokémon');
    }
  }
}

export default new PokemonService();
