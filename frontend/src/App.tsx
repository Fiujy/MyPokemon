import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PokemonIndex from './pokemon/containers/PokemonIndex';
import PokemonAdd from './pokemon/containers/PokemonAdd';
import PokemonEdit from './pokemon/containers/PokemonEdit';
import PokemonShow from './pokemon/containers/PokemonShow';

const App = () => {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className='mt-10 ml-10'>
        <Routes>
          <Route path="/" element={<PokemonIndex />} />
          <Route path="/:id" element={<PokemonShow />} />
          <Route path="/add" element={<PokemonAdd />} />
          <Route path="/edit/:id" element={<PokemonEdit />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;