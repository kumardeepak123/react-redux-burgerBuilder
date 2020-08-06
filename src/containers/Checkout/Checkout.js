import React, { Component } from "react";
import CheckOutSummary from "../../components/CheckOutSummary/CheckOutSummary";
import { Route ,Redirect } from "react-router-dom";
import ContactData from "./contactData/contactData";
import {connect}  from 'react-redux'

class CheckOut extends Component {


  checkOutCancelled = () => {
    this.props.history.goBack();
  };
  checkOutContinued = () => {
    this.props.history.replace("/checkout/contact-data");
  };
  // componentDidMount() {
  //   const query = new URLSearchParams(this.props.location.search);
  //   const ingredients = {};
  //   let price = 0;

  //   for (let param of query.entries()) {
  //     if (param[0] === "price") {
  //       price = param[1];
  //     } else {
  //       ingredients[param[0]] = +param[1];
  //     }
  //   }
  //   this.setState({ ingredients: ingredients, totalPrice: price });
  // }



  render() {

    let summary =<Redirect to="/" />
    if(this.props.ings){
      const purchasedRedirect = this.props.purchased  ?<Redirect to ='/'/>  : null ; 
      summary = (
        <div>
          {purchasedRedirect}
        <CheckOutSummary
          checkOutContinued={this.checkOutContinued}
          checkOutCancelled={this.checkOutCancelled}
          ingredients={this.props.ings}
        />
        <Route
          path={this.props.match.path + "/contact-data"}
          component={ContactData}
        />
      </div>
      )
    }
    return summary ;
  }
}

const mapStateToProps = state =>{

  return {
     ings : state.burgerBuilder.ingredients ,
     purchased : state.order.purchased
    
  }
}

export default connect(mapStateToProps)(CheckOut) ;
