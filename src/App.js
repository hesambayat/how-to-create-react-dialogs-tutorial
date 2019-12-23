import React from 'react'
import { useModal } from './context/modal-context'
import logo from './logo.svg'
import './App.css'

function App() {
  const { setModal } = useModal()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <label
          className="App-link"
          onClick={() => {
            setModal(<h1>Hola senora!</h1>)
          }}
        >
          Start a dialogue
        </label>
      </header>
    </div>
  )
}

export default App
