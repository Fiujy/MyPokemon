// src/pokemon/pokemon.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pokemon } from './entities/pokemon.entity';

@Injectable()
export class PokemonService {
  constructor(
    @InjectRepository(Pokemon)
    private readonly pokemonRepository: Repository<Pokemon>,
  ) { }

  async create(createPokemonDto: { name: string; type: string }): Promise<Pokemon> {
    const pokemon = this.pokemonRepository.create(createPokemonDto);
    return this.pokemonRepository.save(pokemon);
  }

  async findAll(): Promise<Pokemon[]> {
    return this.pokemonRepository.find();
  }

  async findOne(id: number): Promise<Pokemon> {
    return this.pokemonRepository.findOne({where: { id }});
  }

  async update(id: number, updatePokemonDto: { name: string; type: string }): Promise<Pokemon> {
    await this.pokemonRepository.update(id, updatePokemonDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.pokemonRepository.delete(id);
  }

  // Méthode pour insérer les Pokémon
  async createInitialPokemons(): Promise<void> {
    const pokemons = [
      { name: 'Bulbizarre', type: 'Plante/Poison' },
      { name: 'Herbizarre', type: 'Plante/Poison' },
      { name: 'Florizarre', type: 'Plante/Poison' },
      { name: 'Salamèche', type: 'Feu' },
      { name: 'Reptincel', type: 'Feu' },
      { name: 'Dracaufeu', type: 'Feu/Vol' },
      { name: 'Carapuce', type: 'Eau' },
      { name: 'Carabaffe', type: 'Eau' },
      { name: 'Tortank', type: 'Eau' },
      { name: 'Chenipan', type: 'Insecte' },
    ];

    for (const pokemon of pokemons) {
      // Vérifier si le Pokémon existe déjà dans la base de données pour éviter les doublons
      const existingPokemon = await this.pokemonRepository.findOne({
        where: { name: pokemon.name },
      });

      if (!existingPokemon) {
        await this.pokemonRepository.save(pokemon);
      }
    }
  }

}