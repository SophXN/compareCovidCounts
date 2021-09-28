import React from 'react';
import Home from './Home';
import Country from './Country';
import Summary from './Summary';
import './App.css';
import { Route, Link } from 'react-router-dom';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/country" component={Country} />
      <Route exact path="/summary" component={Summary}/>

</div>
  );
}

export default App;
