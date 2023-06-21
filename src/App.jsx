import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Counter from './components/counter';


function App() {
  const [counter, setCounter] = useState(0);

  const isValidCounter = counter > 0;

  const incrementCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const decrementCounter = () => {
    if(!isValidCounter) return;
    setCounter((prevCounter) => prevCounter -1);
  };

  return (
    <div>
      <Header logo="Ds"/>
      <Counter isValidCounter={isValidCounter}  counter={counter} onDecrementCounter={decrementCounter} onIncrementCounter={incrementCounter} />
    </div>
  )
}

export default App
