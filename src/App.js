import React from 'react';
import Home from './Home';
import Summary from './Summary';
import './App.css';
import { Route } from 'react-router-dom';
import { UserForm } from './components/UserForm';

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <UserForm />
      <Route exact path="/" component={Home} />
      <Route exact path="/summary" component={Summary}/>

</div>
  );
}

export default App;
