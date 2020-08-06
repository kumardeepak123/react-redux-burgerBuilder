import * as actionTypes from './actionTypes'
import axios  from  '../../axios-orders'


export const addIngredient =(ingname)=>{
    return {
         ingredientName : ingname ,
         type : actionTypes.ADD_INGREDIENTS
    }
}


export const  removeIngredient =(ingname)=>{
    return {
         ingredientName : ingname ,
         type : actionTypes.REMOVE_INGREDIENTS 
    }
}

export const setIngredient =(ingredients)=>{
    return {
        type : actionTypes.SET_INGREDIENTS ,
        ingredients : ingredients ,
        
    }
}

export const fetchIngredientFailed =()=>{
    return {
        type: actionTypes.FETCH_INGREDIENTSFAILED 
    }
}

export const initIngredients = ()=>{
    return  dispatch =>{
        axios.get('https://my-react-app-e8d42.firebaseio.com/ingredients.json')
    .then(response=>{
        dispatch(setIngredient(response.data))
    })
    .catch(error=>{
        dispatch(fetchIngredientFailed())
    })
    }
}