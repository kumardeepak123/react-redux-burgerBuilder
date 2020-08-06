
import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary'
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {

    const ingredients = Object.keys(props.ingredients)
   .map((igkey)=>{ return <li key={igkey}><span style={{textTransform: 'capitalize'}}>{igkey}</span>:{props.ingredients[igkey]}</li>})

    return ( 

        <Auxiliary>
             <h3>Your Order</h3>
             <p>A delicious burger with following ingredients</p>
             <ul>
                {ingredients}
             </ul>
    <p><strong>Order Total:{props.price.toFixed(2)}</strong></p>
             <p>Continue to checkout?</p>
             <Button btnType="Danger" btnClicked={props.cancelOrder}>CANCEL</Button>
             <Button btnType="Success" btnClicked={props.continueOrder}>CONTINUE</Button>

        </Auxiliary>

    );
}
 
export default orderSummary;