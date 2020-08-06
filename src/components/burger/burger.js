
import React from 'react';
import classes from './burger.css'
import BurgerIngredient from  './burgerIngredients/burgerIngredient'

const burger = (props) => {
let Tingredients = Object.keys(props.bingredients)
                .map((igkey)=>{
                    return [...Array(props.bingredients[igkey])] 
                           .map((_, i)=>{
                               return <BurgerIngredient  key ={igkey+i}type={igkey}/> ;
                           })
                })
                
                .reduce((acc, cur)=>{ return acc.concat(cur)} , [])
  let burgerMessage =null ;              
 if(Tingredients.length===0)
  {  
     burgerMessage= <p><strong>Please add Ingredients </strong></p>
  }
    
    return (
        <div className={classes.burger}>
         <BurgerIngredient type="bread-top"/>
         {burgerMessage} 
         {Tingredients}  
         <BurgerIngredient type="bread-bottom"/>   
        
        </div>

    );
}
 
export default burger;