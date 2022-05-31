import React, { useContext } from 'react'

import { AppContext } from '../../App'

import './Tile.css'

function Tile({ value }) {
  const { currentGuess, setCurrentGuess } = useContext(AppContext)

  const selectTile = (e) => {
    console.log(e.target.textContent)
    const selectedTile = e.target.textContent

    if (currentGuess === '') {
      setCurrentGuess(selectedTile)
    } else if (selectedTile === currentGuess) {
      console.log('match')
    } else {
      console.log('fail')
    }
  }

  return (
    <div className='tile' onClick={selectTile}>
      {value}
    </div>
  )
}

export default Tile
