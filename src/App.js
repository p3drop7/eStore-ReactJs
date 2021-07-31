import React from 'react';
import 'core-js'
import NavBarContainer from './components/NavBar/NavBarContainer';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
/* import CartContext from './components/context/CartContext'; */
/* import CartContainer from './components/Cart/CartContainer'; */

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

          {/* <CartContext.Provider value={cart}> 
            <Route exact path="/cart" >
              <CartContainer />
            </Route>
           </CartContext.Provider> */}

        </Switch>

      </BrowserRouter>

    </div>
  );
}

export default App;