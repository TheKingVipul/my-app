import './App.css';
import Sub from './components/Sub/Sub';
import Add from './components/Add/Add';
import Multi from './components/Multi/Multi';
import Divis from './components/Divis/Divis';

function App() {
  return (
    <div className="App">
     <h1> First React project</h1>
     <p> Trying 5th Commit </p>

  <Add a='5' b='2' ></Add>
  <Sub a='5' b='2' />
  <Multi a='5' b='2'></Multi>
  <Divis a='5' b='2'></Divis>
    </div>
  );
}

export default App;
