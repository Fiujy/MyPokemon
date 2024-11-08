import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PokemonForm from '../components/PokemonForm';
import pokemonService from '../service/pokemon.service';

const PokemonEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState<any>(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const data = await pokemonService.getPokemonById(Number(id));
        setPokemon(data);
      } catch (error) {
        console.error('Erreur lors de la récupération du Pokémon:', error);
      }
    };

    if (id) fetchPokemon();
  }, [id]);

  const handleEdit = async (name: string, type: string) => {
    if (!pokemon) return;

    try {
      await pokemonService.updatePokemon(pokemon.id, { name, type });
      navigate('/');
    } catch (error) {
      console.error('Erreur lors de la modification du Pokémon:', error);
    }
  };

  return (
    <div>
      {pokemon ? (
        <PokemonForm
          initialName={pokemon.name}
          initialType={pokemon.type}
          onSubmit={handleEdit}
        />
      ) : (
        <p>Chargement...</p>
      )}
    </div>
  );
};

export default PokemonEdit;
