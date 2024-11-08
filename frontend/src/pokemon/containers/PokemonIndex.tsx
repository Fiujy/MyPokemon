import { useEffect, useState } from 'react';
import pokemonService from '../service/pokemon.service';
import Table from '../components/Table';
import { useNavigate } from 'react-router-dom';

const PokemonIndex = () => {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const navigate = useNavigate();

  const fetchPokemons = async () => {
    try {
      const pokemonsList = await pokemonService.getAllPokemons();
      setPokemons(pokemonsList);
    } catch (error) {
      console.error('Error fetching pokemons:', error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  const handleShow = (id: number) => {
    navigate(`/${id}`);
  };

  const handleEdit = (id: number) => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = async (id: number) => {
    const isConfirmed = window.confirm('Êtes-vous sûr de vouloir supprimer ce Pokémon ?');
    if (!isConfirmed) {
      return;
    }

    try {
      await pokemonService.deletePokemon(id);
      setPokemons(pokemons.filter((pokemon) => pokemon.id !== id));
    } catch (error) {
      console.error('Error deleting pokemon:', error);
    }
  };

  return (
    <div className="p-4 w-8/12 mx-auto">
      <div className='flex justify-between'>
        <h2 className="text-2xl mb-4">Liste des Pokémons</h2>
        <button className='btn btn-primary' onClick={() => navigate('/add')}>Ajouter un Pokemon</button>
      </div>
      <div className="mt-3">
        <Table
          pokemons={pokemons}
          onShow={handleShow}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default PokemonIndex;
