import React from 'react';
import Home from './Home';
import './App.css';
import { Route } from 'react-router-dom';
import { UserForm } from './components/UserForm';

function App() {
  return (
    <div className="App">
      <UserForm />
      <Route exact path="/" component={Home} />
    </div>
  );
}

export default App;
