import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [color, setColor] = useState('olive')

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded'>Tailwind Test</h1>
    <br />
    <Card username='Shreyash Sule' info="Great Person"/>
    
    <Card username='Gajanan Mathe '  info="Bad Person"/>
    
    <Card username='Vishnu Paranjpe '  />
    
    </>
  )
}

export default App
