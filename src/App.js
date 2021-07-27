import React from 'react';
import 'core-js'
import NavBarContainer from './components/NavBar/NavBarContainer';
import ItemListContainer from './components/items/ItemListContainer';
import ItemDetailContainer from './components/itemDetail/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import InputKeyDown from './components/InputKeyDown/InputKeyDown';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        
        <NavBarContainer />
        
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

      <InputKeyDown />

    </div>
  );
}

export default App;
