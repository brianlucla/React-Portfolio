import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Outlet />
    </>
  )
}

export default App
