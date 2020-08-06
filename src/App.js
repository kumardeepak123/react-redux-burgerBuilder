import React, { Component } from "react";
import Layout from "./hoc/layout/layout";
import BurgerBuilder from "./containers/bugerBuilder/bugerbuilder";
import CheckOut from "./containers/Checkout/Checkout";
import { Route, Switch } from "react-router-dom";
import Orders   from './containers/orders/orders'

class App extends Component {



  
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout" component={CheckOut} />
            <Route path="/orders" component={Orders} />
            <Route path="/" exact component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
