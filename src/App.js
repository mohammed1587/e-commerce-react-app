import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import {
  Home,
  SingleProduct,
  Cart,
  About,
  Products, Error,
} from './pages'
import {Footer, Navbar, Sidebar} from "./Components";

function App() {
  return (
         <Router>
           <Navbar />
           <Sidebar />

          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/about'>
              <About />
            </Route>
            <Route exact path='/cart'>
              <Cart />
            </Route>
            <Route exact path='/products'>
              <Products />
            </Route>
            <Route exact path='/products/:id' children={<SingleProduct />} />
            <Route path="*">
              <Error/>
            </Route>

          </Switch>
           <Footer />

         </Router>
   )
}

export default App
