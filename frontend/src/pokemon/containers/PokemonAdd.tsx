import PokemonForm from '../components/PokemonForm';
import pokemonService from '../service/pokemon.service';

const PokemonAdd = () => {
  const handleCreate = async (name: string, type: string) => {
    try {
      await pokemonService.createPokemon({ name, type });
      // Rediriger ou afficher un message de succès après l'ajout
      alert('Pokémon créé avec succès!');
    } catch (error) {
      console.error('Erreur lors de la création du Pokémon:', error);
    }
  };

  return (
    <div>
      <PokemonForm onSubmit={handleCreate} />
    </div>
  );
};

export default PokemonAdd;
