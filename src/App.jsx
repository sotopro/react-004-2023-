/* eslint-disable react/jsx-key */
import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/header'
import Counter from './components/counter';
import Input from './components/input';
import Card from './components/products/card';


function App() {
  const [counter, setCounter] = useState(0);
  const [task, setTask] = useState('');
  const [active, setActive] = useState(false);
  const [products, setProducts] = useState([]);

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

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch('https://6499986179fbe9bcf83f91ca.mockapi.io/produtcs', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const data = await response.json();

        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    }
    getProduct();
  }, [])


  console.log({ products });
  return (
    <div>
      <Header logo="Ds"/>
      <Counter isValidCounter={isValidCounter}  counter={counter} onDecrementCounter={decrementCounter} onIncrementCounter={incrementCounter} />
      <div className='inputContainer'>
        <Input 
          placeholder='Add a new task'
          id='task'
          required={true}
          name='Task name'
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          active={active}
        />
        <div className='cardContainer'>
        {
          products.map((product) => (
            <Card {...product} />
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default App
