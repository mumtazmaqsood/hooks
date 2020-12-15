import logo from './logo.svg';
import './App.css';
import Parent from './Parent';
import { useState } from 'react';
import ValueContext from './ValueContext';


//here is num=45, need to use by child.js , so first this num need to pass to parent element
//then pass to child element , directly it we cannot pass this value to child element
//if need to update this value , through this process whole hirechly will update root-> parent
//->child  

function App() {
  //let [num, setNum] = useState(45);
  let value = 70;
  return (
    //this value is avaliable to all the child components 
    <ValueContext.Provider value = {value}> 
    <div className="App">
      <h1>Hello world!</h1>
      <Parent />
    </div>
    </ValueContext.Provider>
  );
}

export default App;
