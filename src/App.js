import './App.css';
import Sub from './components/Sub/Sub';
import Add from './components/Add/Add';
import Multi from './components/Multi/Multi';

function App() {
  return (
    <div className="App">
     <h1> First React project</h1>
     <p> Trying 2nd Commit </p>

  <Add a='5' b='2' ></Add>
  <Sub a='5' b='2' />
  <Multi a='5' b='2'></Multi>
    </div>
  );
}

export default App;
