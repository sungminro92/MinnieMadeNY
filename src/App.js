import logo from './logo.svg';
import './App.css';
import { useState, useReducer, useEffect, createContext } from 'react'

import { Provider } from "react-redux";
import AuthProvider from "./context/auth";
import configureStore from './redux/configureStore'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import ShopFlowers from './pages/ShopFlowers'
import ShopWallDecors from './pages/ShopWallDecors'
import ShopArts from './pages/ShopArts'
import HomePage from './pages/HomePage'
import ProductInfo from './pages/ProductInfo'
import Register from './components/Users/Register'
import AdminPage from './pages/AdminPage'
import CartPage from './components/Cart/CartPage'
import Navigation from './components/Navigation'
import MainMenu from './components/MainMenu'
import UserPage from './components/Users/UserPage'
import TutorialsPage from './pages/TutorialsPage'
// import { StaticRouter } from 'react-router-dom';
const store = configureStore()

const initialState = {
  main: false,
  user: false,
  cart: false,
  sideBarOpen: false,
}

function showMenuReducer(state, action) {
  switch (action.type) {
    case "MAIN":
      console.log(state.main);
      return {
        ...state,
        main: !state.main,
        sideBarOpen: !state.sideBarOpen
      }
    case "USER":
      return {
        ...state,
        user: !state.user,
        sideBarOpen: !state.sideBarOpen
      }
    case "CART":
      return {
        ...state,
        cart: !state.cart,
        sideBarOpen: !state.sideBarOpen
      }
    case "SWITCH":
      return {
        ...state,
        cart: !state.cart,
        user: !state.user,
        sideBarOpen: !state.sideBarOpen
      }
    default:
      return state;
  }
}

export const WidthContext = createContext()
function App() {
  const [width, setWindowWidth] = useState(0);
  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };
  // const [show, setShow] = useState({
  //   main: false,
  //   user: false,
  //   cart: false,
  // });
  // const [showUser, setShowUser] = useState(false);
  const [state, dispatch] = useReducer(showMenuReducer, initialState);

  if (state.sideBarOpen) {
    if (typeof window != 'undefined' && window.document) {
      document.body.style.overflow = 'hidden';
    }
  } else {
    document.body.style.overflow = 'unset';
    console.log("sidebarclosed")
  }

  // useEffect(() => {
  //   localStorage.setItem('cartItems', JSON.stringify(cartItems));
  // }, [cartItems])


  return (
    <Provider store={store}>
      <AuthProvider>
        <WidthContext.Provider value={width} >
          <Router>

            {/* <div className="App container mx-auto bg-gray-200 ">
        <h1>MinnieMadeNY website</h1>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
      </div> */}

            {/* {showMenu ? <MainMenu handleShowMenu={handleShowMenu} /> : null} */}
            <MainMenu func={dispatch} show={state.main} />
            <UserPage func={dispatch} show={state.user} />
            <CartPage func={dispatch} show={state.cart} />
            <Navigation func={dispatch} />
            <Switch>
              <Route path="/wire-flowers" component={ShopFlowers} />
              <Route path="/wire-wall-decors" component={ShopWallDecors} />
              <Route path="/wire-arts-accessories" component={ShopArts} />
              <Route path="/product-details" component={ProductInfo} />
              <Route path="/tutorials" component={TutorialsPage} />
              <Route path="/admin" component={AdminPage} />
              {/* <Route path="/cart" component={CartPage} /> */}
              {/* <Route path="/register" component={Register} /> */}
              <Route exact path="/" component={HomePage} />
            </Switch >
          </Router>
        </WidthContext.Provider>
      </AuthProvider>
    </Provider >
  )

}

export default App;
