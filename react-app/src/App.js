import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
// import UsersList from './components/User/UsersList';
// import User from './components/User/User';
import MyProfile from './components/User/MyProfile';
import CreateCharacter from './components/Character/CreateCharacter';
import Splash from './components/Home/Splash';
import Home from './components/Home/Home';
import { authenticate } from './store/session';
import DisplayGrind from './components/GrindSession/DisplayGrind';

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
        {/* <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute> */}
        <Route path='/grind-sessions' exact={true}>
          <DisplayGrind />
        </Route>
        <ProtectedRoute path='/profile' exact={true} >
          <MyProfile />
        </ProtectedRoute>
        <ProtectedRoute path='/create-character' exact={true} >
          <CreateCharacter />
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
      </Switch>
    </BrowserRouter>
  );
}

export default App;
