import './App.css';
import Context from './pages/context/context';
import Intro from './pages/intro/intro';
import Problems from './pages/problems/problems';
import Prototypes from './pages/prototypes/prototypes';
import Redesign from './pages/redesign/redesign';
import Reflections from './pages/reflections/reflections';

function App() {
  return (
    <div className="App">
      <Context />
      <Intro />
      <Problems />
      <Prototypes />
      <Redesign />
      <Reflections />
    </div>
  );
}

export default App;
