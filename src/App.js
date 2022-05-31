import React, { createContext, useState } from 'react'

import NewGame from './components/NewGame/NewGame'
import Board from './components/Board/Board'
import './App.css'

export const AppContext = createContext()

function App() {
  const [difficulty, setDifficulty] = useState('')
  const [layout, setLayout] = useState([])
  const [gameStarted, setGameStarted] = useState(false)
  const [currentGuess, setCurrentGuess] = useState('')

  return (
    <div className='app'>
      <AppContext.Provider
        value={{
          difficulty,
          setDifficulty,
          setGameStarted,
          currentGuess,
          setCurrentGuess,
          setLayout
        }}
      >
        {!gameStarted ? (
          <NewGame />
        ) : (
          <Board difficulty={difficulty} layout={layout} />
        )}
      </AppContext.Provider>
    </div>
  )
}

export default App
