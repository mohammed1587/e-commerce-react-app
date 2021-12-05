import React from 'react'
import store from "./Components/store";
import Cc from "./Components/CC";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import {
  Home,
  SingleProduct,
  Cart,
  About,
  Products, Error,
} from './pages'
import {Footer, Navbar, Sidebar} from "./Components";
import {Provider} from "react-redux";

// function App() {
//   return (
//          <Router>
//            <Navbar />
//            <Sidebar />
//
//           <Switch>
//             <Route exact path='/'>
//               <Home />
//             </Route>
//             <Route exact path='/about'>
//               <About />
//             </Route>
//             <Route exact path='/cart'>
//               <Cart />
//             </Route>
//             <Route exact path='/products'>
//               <Products />
//             </Route>
//             <Route exact path='/products/:id' children={<SingleProduct />} />
//             <Route path="*">
//               <Error/>
//             </Route>
//
//           </Switch>
//            <Footer />
//
//          </Router>
//    )
// }


function App(){
    return(
        <Provider store={store}>
          <Cc/>
        </Provider>
    )
}
export default App
