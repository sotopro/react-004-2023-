/* eslint-disable react/jsx-key */
import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/header'
import Input from './components/input';
import Card from './components/products/card';


function App() {
  const [task, setTask] = useState('');
  const [active, setActive] = useState(false);
  const [products, setProducts] = useState([]);

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


  return (
    <div>
      <Header logo="Ds"/>
      <div className='contentContainer'>
        <div className='inputContainer'>
          <Input 
            placeholder='find a product'
            id='task'
            required={true}
            name='Search'
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            active={active}
          />
        </div>
          <h2 className='headerTitleCard'>Products</h2>
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
