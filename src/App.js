import logo from './logo.svg';
import './App.css';
import Parent from './Parent';
import { useState } from 'react';


//here is num=45, need to use by child.js , so first this num need to pass to parent element
//then pass to child element , directly it we cannot pass this value to child element
//if need to update this value , through this process whole hirechly will update root-> parent
//->child  

function App() {
  let [num, setNum] = useState(45);
  return (
    <div className="App">
      <h1>Hello world!</h1>
      <Parent number={num}/>
      <button onClick={()=>{setNum(++num)}}>Count Number</button>
    </div>
  );
}

export default App;
