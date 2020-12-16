
import React from 'react';
import Child from './Child'
import Child2 from './Child2';

//through props data can be shared accross components

function Parent(props) {
    return(
        <div>
            Parent Component
            <Child />
            <Child2 />
        </div>
    );
}

export default Parent;