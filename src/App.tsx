
import React, { useState } from 'react';
import './App.css';
// @ts-ignore
import Identity from "./components/Identity.tsx"
// @ts-ignore
import Counter from "./components/Counter.tsx"
// @ts-ignore
import Image from "./components/Image.tsx"

interface IState {
  counter : number
  showPicture : boolean
}


function App() {
  const [counter, setCounter] = useState(0)
  const [showPicture, setShowPicture] = useState(false)
  const incrementer = () => {
  setCounter((prev) => prev + 1);
  if ((counter+1) % 3 == 0) 
  setShowPicture((showPicture) => true)
  else setShowPicture((showPicture) => false)

}
  return (
    <div className="App">
      <Identity nama="Ferdinand Angelo Wijaya" kelas ="XII MIPA 2" isMorning ={false}/>
      <Counter counter={counter} />
      <button onClick={incrementer}>Click</button>
      <Image showPicture={showPicture}/>
    </div>
  );
}

export default App;
