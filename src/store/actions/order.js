import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId : id,
    orderData: orderData,
  };
};

export const purchaseBurgerFail = (error) => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error: error,
  };
};

export const purchaseBurgerStart =()=>{
    return {
         type: actionTypes.PURCHASE_BURGER_START
    }
}

export const purchaseBurger = (orderData) => {
    
  return (dispatch) => {

    dispatch(purchaseBurgerStart()) ;
    axios
      .post("/orders.json", orderData)
      .then((res) => {
          dispatch(purchaseBurgerSuccess(res.data , orderData)) ;
      })
      .catch((error) => {
         dispatch(purchaseBurgerFail(error)) ;
         console.log(error) ;
      })
  };
};

export const purchaseInit =()=>{
  return {
     type : actionTypes.PURCHASE_INIT 
  }
}

export const fetchOrderStart =() =>{
  return {
     type : actionTypes.FETCH_ORDER_START
  }
}
export const fetchOrderFail =(error)=>{
  return {
    type :actionTypes.FETCH_ORDER_FAIL ,
    error : error
  }
}
export const  fetchOrderSuccess =(orders)=>{
  return {
    type :actionTypes.FETCH_ORDER_SUCCESS ,
    orders :orders
  }
}

export const  fetchOrder = () =>{
   return dispatch =>{
      dispatch(fetchOrderStart()) ;
    axios.get('/orders.json')
    .then(res=>{
        const fetchedOrders= [] ;
        for(let key in res.data)
        {
            fetchedOrders.push({
                  ...res.data[key] ,
                  id:key

            })
        }
       // console.log(fetchedOrders)
        dispatch(fetchOrderSuccess(fetchedOrders)) ;
    })
    .catch(err=>{
      dispatch(fetchOrderFail(err)) ;

    })
   }
}