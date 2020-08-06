import * as actionTypes  from '../actions/actionTypes'
const initialState = {
    ingredients:null ,
    error : false ,
    totalPrice : 4
}

const INGREDIENT_PRICE = {
    salad: 0.4,
    bacon: 0.2,
    meat: 1.3,
    cheese: 0.7,
  };

const  reducer=(state= initialState  , action) =>{

    switch(action.type)
    {
        case actionTypes.ADD_INGREDIENTS :
            return {
                ... state ,
                ingredients :{
                     ...state.ingredients ,
                     [action.ingredientName] :  state.ingredients[action.ingredientName] + 1 

                } ,
                totalPrice : state.totalPrice + INGREDIENT_PRICE[action.ingredientName]
            } ;
        case  actionTypes.REMOVE_INGREDIENTS :
            return{
                ... state ,
                ingredients :{
                     ...state.ingredients ,
                     [action.ingredientName] :  state.ingredients[action.ingredientName] -1 

                } ,
                totalPrice : state.totalPrice + INGREDIENT_PRICE[action.ingredientName]

            } ;

        case  actionTypes.SET_INGREDIENTS :
                 return {
                     ... state ,
                     ingredients : action.ingredients ,
                     error: false ,
                     totalPrice : 4 
                 } ;
        case  actionTypes.FETCH_INGREDIENTSFAILED :
            return {
                ...state ,
                error : true 
            }    
         default :
          return state ; 
    }


}


export default reducer