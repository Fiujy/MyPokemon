import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface PokemonFormProps {
  onSubmit: (name: string, type: string) => void;
  initialName?: string;
  initialType?: string;
}

const PokemonForm = ({ onSubmit, initialName = '', initialType = '' }: PokemonFormProps) => {
  const [name, setName] = useState(initialName);
  const [type, setType] = useState(initialType);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(name, type);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-neutral p-10 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6">
        {initialName ? 'Modifier un Pokémon' : 'Ajouter un Pokémon'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Nom du Pokémon"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border-2 border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Type du Pokémon"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full p-3 border-2 border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="flex space-x-4 justify-center">
          <button type="button" className="btn btn-warning" onClick={() => navigate('/')}>Retour</button>
          <button type="submit" className="btn btn-success">{initialName ? 'Enregistrer' : 'Ajouter'}</button>
          {initialName ? 
            <button type="button" className="btn btn-error">Supprimr</button> 
          : ''}
        </div>
      </form>
    </div>
  );
};

export default PokemonForm;
