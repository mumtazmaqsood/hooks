
import React from 'react';
import Child from './Child'

//through props data can be shared accross components

function Parent(props) {
    return(
        <div>
            Parent Component
            <Child />
        </div>
    );
}

export default Parent;