/* eslint-disable react/prop-types */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const Description = ({ text }) => {
  return <p>{text}</p>
}

const Title = ({ text, color }) => {
  return <h1 style={{ color }}>{text}</h1>
}

const Button = ({ onHandlerClick, name, color }) => {
  return (
    <button type='button' onClick={() => onHandlerClick(name)} style={{ background: color }}>{name}</button>
  )
}

const Card = () => {

  const onHandlerClick = (name) => {
    console.log('click', name)
  }
  return (
    <div>
      <Title text='Bienvenidos' color="pink" />
      <Description text='Esta es una descripcion' />
      <Button onHandlerClick={onHandlerClick} color='pink' name='Click me' />
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Card />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
