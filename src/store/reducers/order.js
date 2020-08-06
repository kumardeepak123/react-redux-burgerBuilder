import *  as actionTypes  from  '../actions/actionTypes'
const initialState = {
    orders : [] ,
    loading : false ,
    purchased : false
}


const reducer  =(state = initialState , action) =>{
     switch(action.type)

     {  
         case  actionTypes.FETCH_ORDER_SUCCESS :
             return {
                 ...state ,
                 loading: false ,
                 orders : action.orders
             } 
         case actionTypes.FETCH_ORDER_FAIL :
             return {
                 ...state ,
                 loading: false 
             }
        case actionTypes.FETCH_ORDER_START :
            return {
                ...state ,
                loading: true 
            }
        case actionTypes.PURCHASE_BURGER_START :
        return {
            ...state,
            loading :true
        };   
         case  actionTypes.PURCHASE_BURGER_SUCCESS :  
             return {
                 ...state ,
                 loading : false  ,
                 orders : state.orders.concat({...action.orderData , id: action.orderId}) ,
                 purchased : true 
             };
         case  actionTypes.PURCHASE_BURGER_FAIL :
             return {
                ...state ,
                loading : false 
             };
         case  actionTypes.PURCHASE_INIT :
             {
                return {
                    ...state ,
                    purchased : false 
                }
             }
         default :
         return state         
     }
}

export  default reducer ;


