import logo from './logo.svg';
import './App.css';
//IMPORT CREATESTORE
import { Provider } from "react-redux";
import configureStore from './configureStore'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import ShopFlowers from './pages/ShopFlowers'
import ShopWallDecors from './pages/ShopWallDecors'
import ShopArts from './pages/ShopArts'
import HomePage from './pages/HomePage'

const store = configureStore()


function App() {
  return (
    <Provider store={store}>
      {/* <div className="App container mx-auto bg-gray-200 ">
        <h1>MinnieMadeNY website</h1>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
      </div> */}
      <div>
        <nav>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/wire-flowers">Flowers</Link>
          </div>
          <div>
            <Link to="/wire-wall-decors">Wall Decors</Link>
          </div>
          <div>
            <Link to="/wire-arts-accessories">Arts & Accessories</Link>
          </div>
        </nav>
        <Switch>
          <Route exact path="/wire-flowers" component={ShopFlowers} />
          <Route exact path="/wire-wall-decors" component={ShopWallDecors} />
          {/* <ShopWallDecors /> */}
          {/* </Route> */}
          <Route exact path="/wire-arts-accessories" component={ShopArts} />

          {/* </Route> */}
          <Route exact path="/" component={HomePage} />
          {/* <HomePage /> */}
          {/* </Route> */}
        </Switch >
      </div >
    </Provider >
  )

}

export default App;
