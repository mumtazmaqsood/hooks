import React, { useReducer } from 'react';
import numberReducer from './numberReducer'
function Child2(){
    let [state, dispatch] = useReducer(numberReducer, 52);
    
    return(
        <div>
            Child2 value:
            {state}
            <button onClick={()=> { dispatch({type:"INCREMENT"});}}>Increment</button>

            <button onClick= { ()=> { dispatch({type:"DECREMENT"});}}> Decrement</button>
            <br />
            <button onClick={ ()=> {dispatch({type:"Zero"});}}>Zero</button>
            <br />
            <button onClick={ ()=> {dispatch({type:"Default", value:52}) ;}}>Original state</button>
        </div>
    );

}

export default Child2;