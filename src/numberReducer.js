

//reducer function it will call in child2 compoment 
const numberReducer = (state , action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
               
        case 'DECREMENT':
            return state - 1;
        
        case 'Zero':
            return state = 0;
        
        case 'Default':
            return action.value;
    }
}

export default numberReducer;