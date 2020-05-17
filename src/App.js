import React from 'react';
import {Route,BrowserRouter} from 'react-router-dom';


// Importing Main Route Components 
import Shopping from './components/Shopping/Shopping';
import ItemDesc from './components/ItemDesc/ItemDesc';
import Cart from './components/Cart/Cart';


function App() {
  return (
<BrowserRouter>
  <Route exact path="/" component={Shopping} />
  <Route path="/cart" component={Cart} />
  <Route path="/item" component={ItemDesc} />
</BrowserRouter>

  );
}

export default App;
