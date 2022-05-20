import logo from './logo.svg';
import './App.css';
import { useState, useReducer, useEffect } from 'react'

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
import CartPage from './components/Users/CartPage'
import Navigation from './components/Navigation'
import MainMenu from './components/MainMenu'
import UserPage from './components/Users/UserPage'
const store = configureStore()

const initialState = {
  main: false,
  user: false,
  cart: false,
}

function showMenuReducer(state, action) {
  switch (action.type) {
    case "MAIN":
      console.log(state.main);
      return {
        ...state,
        main: !state.main
      }
    case "USER":
      return {
        ...state,
        user: !state.user
      }
    case "CART":
      return {
        ...state,
        cart: !state.cart
      }
    case "SWITCH":
      return {
        ...state,
        cart: !state.cart,
        user: !state.user
      }
    default:
      return state;
  }
}


function App() {
  // const [show, setShow] = useState({
  //   main: false,
  //   user: false,
  //   cart: false,
  // });
  // const [showUser, setShowUser] = useState(false);
  const [state, dispatch] = useReducer(showMenuReducer, initialState);

  // const handleShowMenu = (value) => {
  //   console.log(value);
  //   switch (value) {
  //     case "MAIN":
  //       console.log(show);
  //       setShow({
  //         ...show,
  //         main: !show.main
  //       })
  //     case "USER":
  //       setShow({
  //         ...show,
  //         user: !show.user
  //       })
  //     case "CART":
  //       setShow({
  //         ...show,
  //         cart: !show.cart
  //       })
  //     default:

  //   }
  // setShowMenu(!showMenu)
  // }

  return (
    <AuthProvider>
      <Router>
        <Provider store={store}>
          {/* <div className="App container mx-auto bg-gray-200 ">
        <h1>MinnieMadeNY website</h1>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
      </div> */}

          {/* {showMenu ? <MainMenu handleShowMenu={handleShowMenu} /> : null} */}
          <MainMenu dispatch={dispatch} show={state.main} />
          <UserPage dispatch={dispatch} show={state.user} />
          <CartPage dispatch={dispatch} show={state.cart} />
          <Navigation dispatch={dispatch} />
          <Switch>
            <Route path="/wire-flowers" component={ShopFlowers} />
            <Route path="/wire-wall-decors" component={ShopWallDecors} />
            <Route path="/wire-arts-accessories" component={ShopArts} />
            <Route path="/product-details" component={ProductInfo} />
            <Route path="/admin" component={AdminPage} />
            {/* <Route path="/cart" component={CartPage} /> */}
            {/* <Route path="/register" component={Register} /> */}
            <Route exact path="/" component={HomePage} />
          </Switch >

        </Provider>
      </Router>
    </AuthProvider >
  )

}

export default App;
