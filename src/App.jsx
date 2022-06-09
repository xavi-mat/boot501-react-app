import './App.css';
import PersonClass from './components/PersonClass/PersonClass';
import PersonFunc from './components/PersonFunc/PersonFunc';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Day 1 - Exercises</h1>
        <h5>Functional Component</h5>
        <div className="mb-3">
          <PersonFunc name="Name1" surname="Surname1" age="40" />
          <PersonFunc name="Name2" surname="Surname2" age="50" />
          <PersonFunc name="Name3" surname="Surname3" age="60" />
        </div>
        <div className="mb-3">
          <h5>Class Component</h5>
          <PersonClass name="Name4" surname="Surname4" age="70" />
          <PersonClass name="Name5" surname="Surname5" age="80" />
          <PersonClass name="Name6" surname="Surname6" age="90" />
        </div>
      </header>
    </div>
  );
}

export default App;
