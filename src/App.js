import './App.css';
import Header from './MyComponents/Header';
import Home from './MyComponents/Home';
import Checkout from './MyComponents/Checkout';
import Login from './MyComponents/Login';
import Payment from './MyComponents/Payment';
import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { auth } from './MyComponents/firebase';
import { useStateValue } from './MyComponents/StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

function App() {

  const promise = loadStripe("pk_test_51J5tgTSJ77arJUbK7LFIWICMKYFH0BgVkmWYJl4qvMoHo7zejT5uAtII88TzgGIhS8WT5LCfHzyac6aQvUuuMH3o00YJyeh8jM");


  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("The USER is: >>>", authUser);

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])


  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route exact path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
