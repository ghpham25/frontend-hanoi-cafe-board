import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardLayout from './components/CardLayout'

function App() {
  return (
    <div className='App'>
      <h1> Hanoi's local cafes</h1>
      <h2> A list of hiding places for Hanoians</h2>
      <CardLayout />
    </div>
  )
}

export default App
