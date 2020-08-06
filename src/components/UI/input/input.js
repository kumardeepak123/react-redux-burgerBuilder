import React from 'react';
import classes from './input.css'

const input = (props) => {
  
    const  inputClasses = [classes.InputElement] ;

    if(props.invalid && props.shouldValidate && props.touch)
    {
        inputClasses.push(classes.Invalid)
    }
     
    let inputElement = null ;
     switch(props.elementType)
     {
         case('input') : 
        inputElement=< input  className={  inputClasses.join(' ')}  onChange={props.changed} {...props.elementConfig}  value={props.value} />
        break ;
        case('textarea') :
        inputElement = <textarea  className={  inputClasses.join(' ')} onChange={props.changed} {...props} value={props.value} /> 
        break ;
        case('select') :
        inputElement =  <select  
          className={  inputClasses.join(' ')} 
           onChange={props.changed}
          value={props.value}
         >
            { props.elementConfig.options.map((option)=>{
                return (<option key={option.value}  value={option.value}>
                            {option.displayValue}
                       </option>)
            })}
         </select>
        break ;
        default:
            inputElement =<input onChange={props.changed} className={  inputClasses.join(' ')} {...props} value={props.value}/>
     }



    return (  
        <div  className={classes.Input}>
            <label className={classes.Label} >{props.label}</label>
            {inputElement}
        </div>
    );
}
 
export default input;