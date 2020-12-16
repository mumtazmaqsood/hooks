
import React, { useContext } from 'react';
import ValueContext from './ValueContext';

function Child(props) {
    let value = useContext(ValueContext)
    return(
        <div>
            Child Component {value}
            <button onClick={()=>{value[1](++value[0])}}> update value </button>
        </div>
    );
}

export default Child;