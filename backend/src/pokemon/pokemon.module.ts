import { Module, OnModuleInit } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pokemon } from './entities/pokemon.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pokemon])],
  controllers: [PokemonController],
  providers: [PokemonService],
})
export class PokemonModule implements OnModuleInit {
  constructor(private readonly pokemonService: PokemonService) {}

  async onModuleInit() {
    await this.pokemonService.createInitialPokemons();
  }
}