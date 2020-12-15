
import React from 'react';
import Child from './Child'

//through props data can be shared accross components

function Parent(props) {
    return(
        <div>
            Parent Component
            <Child number = {props.number}/>
        </div>
    );
}

export default Parent;