import React, { createContext, useState } from 'react'

import NewGame from './components/NewGame/NewGame'
import Board from './components/Board/Board'
import './App.css'

export const AppContext = createContext()

function App() {
  const [difficulty, setDifficulty] = useState('')
  const [gameStarted, setGameStarted] = useState(false)

  return (
    <div className='app'>
      <AppContext.Provider
        value={{ difficulty, setDifficulty, setGameStarted }}
      >
        {!gameStarted ? <NewGame /> : <Board difficulty={difficulty} />}
      </AppContext.Provider>
    </div>
  )
}

export default App
