import React, { Component } from "react";
import Auxiliary from "../../hoc/Auxiliary";
import Burger from "../../components/burger/burger";
import BuildControls from "../../components/buildControls/buildControls";
import Modal from "../../components/UI/modal/modal";
import OrderSummary from "../../components/buildControls/OrderSummary/OrderSummary";
import axios from '../../axios-orders'
import Spinner from '../../components/UI/Spinner/spinner'
import withErrorHandler from  '../../hoc/withErrorHandler/withErrorHandler'
import {connect} from 'react-redux'
import * as  burgerBuilderActions from '../../store/actions/index'


class BurgerBuilder extends Component {
  state = {
 
  
    purchasing: false,
  
  };


  updatePurchasable = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((acc, cur) => {
        return acc + cur;
      }, 0);
      return  sum > 0  ;
    
  };

  purchasingHandler = () => {
    this.setState({ purchasing: true });
  };
  cancellPurchasingHandler = () => {
    this.setState({ purchasing: false });
  };
  continuePurchaseHandler = () => {
    
    this.props.onPurchaseInit() ;
    this.props.history.push('/checkout') ;
  };

  componentDidMount(){
    this.props.onInitIngredients()
    
  }

  render() {

    let disableInfo = {
      ...this.props.ings,
    };
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }
     let orderSummary =null ;
    
     
     let burger=  this.props.error ? <p>ingredients  can't be loaded</p>  :<Spinner/> 
     if(this.props.ings)
     {
      burger = (
        <Auxiliary>
           <Burger bingredients={this.props.ings} />
         <BuildControls
           purchase={this.purchasingHandler}
           orderPurchasable={this.updatePurchasable(this.props.ings)}
           disableInfor={disableInfo}
           totalAmount={this.props.price}
           addItem={this.props.onIngredientAdded}
           removeItem={this.props.onIngredientRemoved}
         />
        </Auxiliary>
      ) ;
      orderSummary =    <OrderSummary
      price={this.props.price}
      ingredients={this.props.ings}
      cancelOrder={this.cancellPurchasingHandler}
      continueOrder={this.continuePurchaseHandler}
    />
     }
   

    return (
      <Auxiliary>
        <Modal
          show={this.state.purchasing}
          removeB={this.cancellPurchasingHandler}
        >
         {orderSummary}
        </Modal>
        {burger}
       
      </Auxiliary>
    );
  }
}


const  mapStatetoProps = state=> {
    return {
       ings : state.burgerBuilder.ingredients ,
       price : state.burgerBuilder.totalPrice ,
       error : state.burgerBuilder.error
    }
}

const mapDispatchtoProps = dispatch =>{
   return {
       onIngredientAdded :  (ingName)=> dispatch(burgerBuilderActions.addIngredient(ingName) ) ,
       onIngredientRemoved :  (ingName)=> dispatch( burgerBuilderActions.removeIngredient(ingName)) ,
       onInitIngredients : ()=> dispatch(burgerBuilderActions.initIngredients()) ,
       onPurchaseInit : ()=> dispatch(burgerBuilderActions.purchaseInit())
   }
}

export default  connect (mapStatetoProps ,mapDispatchtoProps) (withErrorHandler( BurgerBuilder , axios ))  ;
