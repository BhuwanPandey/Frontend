import React from 'react';


const main=(props)=>{
    if(props.name==='Backspace'){
        return(
        <button onClick={props.action} style={{'backgroundColor':'#ff3300','fontSize':'15px','color':'white'}}>{props.name}</button>
        )
    }else{
    return(
        <button onClick={props.action}>{props.name}</button>
    )}
}

export default main;