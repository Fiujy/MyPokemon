import React from 'react';
import { Pokemon } from '../service/pokemon.service';

type TableProps = {
  pokemons: Pokemon[];
  onShow: (id: number) => void;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
};

const Table: React.FC<TableProps> = ({ pokemons, onShow, onEdit, onDelete }) => {
  return (
    <table className="table-auto w-full mx-auto border-collapse">
      <thead>
        <tr>
          {/* <th className="border p-2">#</th> */}
          <th className="border p-2">Nom</th>
          <th className="border p-2">Type</th>
          <th className="border p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {pokemons.map((pokemon, index) => (
          <tr key={pokemon.id} className="text-center">
            {/* <td className="border p-2">{index + 1}</td> */}
            <td className="border p-2">{pokemon.name}</td>
            <td className="border p-2">{pokemon.type}</td>
            <td className="border p-2">
              <button
                className="mr-2 bg-info text-white px-4 py-2 rounded"
                onClick={() => onShow(pokemon.id)}
              >
                Show
              </button>
              <button
                className="mr-2 bg-secondary text-white px-4 py-2 rounded"
                onClick={() => onEdit(pokemon.id)}
              >
                Edit
              </button>
              <button
                className="bg-error text-white px-4 py-2 rounded"
                onClick={() => onDelete(pokemon.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;