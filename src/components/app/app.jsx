import React from 'react'
import "./app.scss"
import { withBookstoreService } from '../hoc/index'
import {Route, Switch} from 'react-router-dom'
import { HomePage, CartPage } from '../pages/index'
import ShopHeader from '../header';
const App = () => {
 
    return (
       <main role="main" className="container-fluid">
            <ShopHeader numItems={5} total={210}/>
            <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/cart" component={CartPage} />
            </Switch>
            </main>
    ) 
}

export default  withBookstoreService()(App);