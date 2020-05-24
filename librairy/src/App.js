import React from 'react';
import Booklisting from './components/Booklisting'
import './App.css';
import Addbook from './components/Addbook'
import {Switch,Route} from 'react-router-dom'



function App() {

  
  return (
    <div className="App">

   <h2 className="display-1">hello this is app</h2>
      <Switch>
            <Route exact path='/' component={Booklisting}/>
            <Route path='/Addbook' component={Addbook}/>
            <Route component={Booklisting}/>

        </Switch>

        

    </div>
  );
}

export default App;
