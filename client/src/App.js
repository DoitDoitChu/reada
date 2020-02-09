import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import List from './pages/List';
import Review from './pages/Review';
import Detail from './pages/Detail';

function App() {
  return (
    <>
      <Route component={Home} path="/" exact />
      <Route component={Login} path="/login" />
      <Route component={Register} path="/register" />
      <Route component={List} path={['/lists/:listname', '/lists']} exact />
      <Route component={Review} path="/review" />
      <Route component={Detail} path="/book/:bookid" />
    </>
  );
}

export default App;
