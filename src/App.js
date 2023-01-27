import './App.css';
import Listing from './components/Listing';
import esty from './data/esty.json';

const data = esty;

function App() {
  return (
    <div className="App">
      <Listing items={data} />
    </div>
  );
}

export default App;
