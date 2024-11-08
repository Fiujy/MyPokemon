import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import pokemonService from '../service/pokemon.service';

const PokemonShow = () => {
    const [pokemon, setPokemon] = useState<any>(null);
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const fetchPokemon = async () => {
        if (id) {
            try {
                const response = await pokemonService.getPokemonById(Number(id));
                setPokemon(response);
            } catch (error) {
                console.error("Erreur lors de la récupération du Pokémon :", error);
            }
        }
    };

    useEffect(() => {
        fetchPokemon();
    }, [id]);

    if (!pokemon) return <div>Chargement...</div>;

    return (
        <div className="max-w-2xl mx-auto mt-5 bg-neutral p-10">
            <h2 className="text-3xl font-bold mb-4">Détails du Pokémon</h2>
            <form className="space-y-4">
                <div className="form-control">
                    <label className="label">Nom du Pokémon</label>
                    <input
                        type="text"
                        value={pokemon.name}
                        readOnly
                        className="input input-bordered input-primary w-full focus:outline-none cursor-default"
                    />
                </div>
                <div className="form-control">
                    <label className="label">Type du Pokémon</label>
                    <input
                        type="text"
                        value={pokemon.type}
                        readOnly
                        className="input input-bordered input-primary w-full focus:outline-none cursor-default"
                    />
                </div>
                <div className="form-control">
                    <label className="label">ID du Pokémon</label>
                    <input
                        type="text"
                        value={pokemon.id}
                        readOnly
                        className="input input-bordered input-primary w-full focus:outline-none cursor-default"
                    />
                </div>
                <div className="flex space-x-4 justify-center">
                    <button onClick={() => navigate('/')} className="btn btn-warning">Retour</button>
                    <button onClick={() => navigate(`/edit/${pokemon.id}`)} className="btn btn-secondary">Modifier</button>
                </div>
            </form>
        </div>
    );
};

export default PokemonShow;
