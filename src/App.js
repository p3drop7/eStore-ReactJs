import React from 'react';
import 'core-js'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/items/ItemListContainer';
import ItemDetailContainer from './components/itemDetail/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        
        <NavBar />
        
        <Switch>
          
          <Route exact path="/">
            <ItemListContainer />
          </Route>

          <Route exact path="/category/:categoryId" >
            <ItemListContainer />
          </Route>

          <Route exact path="/item/:itemId" >
            <ItemDetailContainer />
          </Route>

        </Switch>

      </BrowserRouter>

    </div>
  );
}

export default App;
