import React from 'react'
import "./app.scss"
import { withBookstoreService } from '../hoc/index'
import {Route, Switch} from 'react-router-dom'
import { HomePage, CartPage } from '../pages/index'
import ShopHeader from '../header';
import Footer from '../footer';


const App = () => {
 
    return (
       <main role="main" className="container-fluid">
            <ShopHeader />
            <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/cart" component={CartPage} />
                
            </Switch>
              <Footer/>
            </main>
    ) 
}

export default  withBookstoreService()(App);