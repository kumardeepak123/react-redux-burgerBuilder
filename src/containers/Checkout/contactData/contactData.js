import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./contactData.css";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/spinner";
import { withRouter } from "react-router-dom";
import Input from "../../../components/UI/input/input";
import {connect}  from 'react-redux'
// import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler'

import * as actions from '../../../store/actions/index'
class ContactData extends Component {
  state = {
    orderform: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your name",
        },
        value: "",
        validation:{
           required: true 
        },
        valid : false ,
        touched: false 
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your street",
        },
        value: "",
        validation:{
          required: true 
       },
       valid : false ,
       touched: false 
      },

      zipCode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "ZIP Code",
        },
        value: "",
        validation:{
          required: true  ,
          minLength : 5,
          maxLength: 5
       },
       valid : false ,
       touched: false 
      },

      country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your country",
        },
        value: "",
        validation:{
          required: true 
       },
       valid : false ,
       touched: false 
      },

      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "E-mail",
        },
        value: "",
        validation:{
          required: true 
       },
       valid : false ,
       touched: false 
      },

      delivery: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", displayValue: "Fastest" },
            { value: "cheapest", displayValue: "Cheapest" },
          ],
        },
        value : "",
        valid : true ,
        validation:{}
        
      },
      
    },
    formIsValid : false ,

  };

  orderHandler = (event) => {
    event.preventDefault();
    //const ingredients = this.props.ingredients ;
    const formData= {};
    for(let inputId in this.state.orderform)
    {
       formData[inputId] = this.state.orderform[inputId].value ;
    }

    // this.setState({ loading: true });
    const order = {
      ingredients: this.props.ings,
      totalPrice: this.props.price,
      orderForm : formData 
    };
    this.props.onOrderBurger(order) ;
    
    
  };
  
  inputChangedHandler=(event , inputId)=>{
    const updatedOrderForm = {
      ...this.state.orderform
    }
    const updateInputId = { ...updatedOrderForm[inputId] }     
    
    updateInputId.value = event.target.value ;
    updateInputId.valid = this.checkValidity( updateInputId.value  ,  updateInputId.validation) ;
    updateInputId.touched =true ;
    updatedOrderForm[inputId] = updateInputId ;

     let formIsValid = true ;
    for(let key in updatedOrderForm)
    {
       formIsValid =   updatedOrderForm[key].valid  && formIsValid ;
    }

    this.setState({orderform : updatedOrderForm  , formIsValid : formIsValid}) ;


  }

  checkValidity=(value ,rules)=>{
    let  isValid = true ;

    if(!rules)
    {
        return true ;
    }

    if(rules.required)
    {
       isValid = value.trim() !== '' && isValid 
    }

    if(rules.minLength)
    {
       isValid =  value.length >= rules.minLength && isValid  ;
    }

    if(rules.maxLength)
    {
        isValid =  value.length <= rules.maxLength && isValid  ;
    }
    return isValid ;
  }

  render() {
    const inputElementsArr = [];
    for (let key in this.state.orderform) {
      inputElementsArr.push({
        id: key,
        config: this.state.orderform[key],
      });
    }
    let form = (
      <form  onSubmit={this.orderHandler}>
        {inputElementsArr.map((ip) => {
          return (
            <Input
              key={ip.id}
              elementType={ip.config.elementType}
              elementConfig={ip.config.elementConfig}
              value={ip.config.value}
              invalid={!ip.config.valid}
              shouldValidate={ip.config.validation}
              touch ={ip.config.touched}
              changed={(event)=>{this.inputChangedHandler(event , ip.id)}}
            />
          );
        })}
        <Button  disabled={!this.state.formIsValid} btnType="Success">
          ORDER
        </Button>
      </form>
    );
    if (this.props.loading) {
      form = <Spinner />;
    }

    return (
      <div className={classes.ContactData}>
        <h4>Enter Contact data </h4>
        {form}
      </div>
    );
  }
}


const mapStateToProps = state =>{
  return {
    ings : state.burgerBuilder.ingredients ,
    price :state.burgerBuilder.totalPrice ,
    loading : state.order.loading 
  }
}

const mapDispatchToprops = dispatch =>{
  return {

       onOrderBurger :  (orderData)=> dispatch(actions.purchaseBurger(orderData)) 
  }
}
export default  connect(mapStateToProps ,mapDispatchToprops)  (withRouter(ContactData))  ;
