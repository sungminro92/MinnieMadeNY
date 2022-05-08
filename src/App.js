import logo from './logo.svg';
import './App.css';
//IMPORT CREATESTORE
import { Provider } from "react-redux";
import configureStore from './configureStore'

const store = configureStore()


function App() {
  return (
    <div className="App">
      <h1>MinnieMadeNY website</h1>
    </div>
  );
}

export default App;
