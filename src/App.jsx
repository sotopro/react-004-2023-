import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Counter from './components/counter';
import Input from './components/input';


function App() {
  const [counter, setCounter] = useState(0);
  const [task, setTask] = useState('');
  const [active, setActive] = useState(false);

  const isValidCounter = counter > 0;

  const incrementCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const decrementCounter = () => {
    if(!isValidCounter) return;
    setCounter((prevCounter) => prevCounter -1);
  };

  const onChange = (event) => {
    const value = event.target.value;
    setTask(value);
  }

  const onFocus = () => {
    setActive(true);
  }

  const onBlur = () => {
    setActive(false);
  }

  const inputClass = `container ${active ? 'active' : ''}`

  return (
    <div>
      <Header logo="Ds"/>
      <Counter isValidCounter={isValidCounter}  counter={counter} onDecrementCounter={decrementCounter} onIncrementCounter={incrementCounter} />
      <div style={{ width: '200px', padding: '1rem' }}>
        <Input 
          placeholder='Add a new task'
          id='task'
          required={true}
          name='Task name'
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          className={inputClass}
        />
      </div>
    </div>
  )
}

export default App
