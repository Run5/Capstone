import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Contact from './components/MyContact';
import Splash from './components/Home/Splash';
import Home from './components/Home/Home';
import { authenticate } from './store/session';
import DisplayGrind from './components/GrindSession/DisplayGrind';
import CharacterPage from './components/Character/CharacterPage';
import NotFoundPage from './components/NotFoundPage';
import About from './components/About';

function App() {
  const [loaded, setLoaded] = useState(false);
  const user = useSelector(state => state.session.user)
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <Route path='/grind-sessions/:location' exact={true} forceRefresh>
          <DisplayGrind />
        </Route>
        <Route path='/contact' exact={true} >
          <Contact />
        </Route>
        <Route path='/about' exact={true} >
          <About />
        </Route>
        <ProtectedRoute path='/characters' exact={true} >
          <CharacterPage />
        </ProtectedRoute>
        {user ? (
          <ProtectedRoute path='/' exact={true} >
            <Home />
          </ProtectedRoute>
        ) : (
          <Route exact path="/">
            <Splash />
          </Route>
        )}
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
