import React from 'react';
import './index.css'
import './input.css'
const Input=(props)=>{
    console.log(props,"input.js")

    let classes="InputElement valid"
let invalidMessage=null
let invalid=null

    if(props.invalid && props.touched    ){
        classes="InputElement "
        invalidMessage=(
        <p>PLease Enter a Valid {props.type} min 3 words req</p>
        )
    }
    // if(props.invalid || props.touched ||  props.value.length<=3){
    //     invalid=(
    //         <p>PLease Enter a Valid {props.type} min 3 words req</p>
    //         )
    // }
    
    console.log(props.invalid)
    if(props.value===undefined){
        classes="InputElement valid"
    }

    let inputElement=null

    switch(props.elementType){
        case "input":
             inputElement=<input className={classes}    onChange={props.changed}   {...props.elementConfig} value={props.value}/>

             console.log(classes)
        
        break;
        case "textarea":
             inputElement=<textarea className={classes}   onChange={props.changed}   {...props.elementConfig} value={props.value}/>
        
        break;
        default:
             inputElement=<input className={classes}    onChange={props.changed}{  ...props.elementConfig} value={props.value}/>
             break;
             case "select":
                 inputElement=(
                     <select className={classes} value={props.value} >
                         
                         {props.elementConfig.options.map(option=>
                             <option key={option.value } value="fast"> {option.displayValue}</option>
                             
                         )}
                         
                     </select>
                 )
                
    }
    

    return(
    <div className="Input">
      
        {inputElement}
        {invalidMessage}
        {/* {invalid} */}
    </div>
)
}
export default Input