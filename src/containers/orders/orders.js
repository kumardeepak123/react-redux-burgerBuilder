import React ,{Component} from 'react';
import Order from '../../components/order/order'
import axios from '../../axios-orders'
import {connect} from 'react-redux'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import * as actions from '../../store/actions/index'
import Spinner from '../../components/UI/Spinner/spinner'


class Orders extends Component {

  componentDidMount(){
   
   this.props.onFetchOrders() ;
  }
  

    render() {
        
        let order = <Spinner/>
        if(!this.props.loading){
            order = this.props.orders.map((order)=>{
                return <Order key={order.id} ingredients={order.ingredients} price={+order.totalPrice}/>
            })
        }
        return (
            <div>
               {order}
            </div>
          );
    }
}

const mapStateToProps = state =>{
    return {
        orders : state.order.orders ,
        loading : state.order.loading
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onFetchOrders : ()=>dispatch(actions.fetchOrder()) 
    }
}

 
export default connect(mapStateToProps,mapDispatchToProps) (withErrorHandler(Orders ,axios));