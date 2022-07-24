import React, { useContext } from 'react'

import { AppContext } from '../../App'

import './Tile.css'

function Tile({ value }) {
  const { currentGuess, setCurrentGuess, hidden } = useContext(AppContext)

  const selectTile = (e) => {
    console.log(e.target.textContent)
    const selectedTile = e.target.textContent

    e.target.classList.remove('hidden')

    if (currentGuess === '') {
      setCurrentGuess(selectedTile)
    } else if (selectedTile === currentGuess) {
      console.log('match')
    } else {
      console.log('fail')
    }
  }

  // return (
  //   <div className='tile' onClick={selectTile}>
  //     <span>{value}</span>
  //   </div>
  // )
  return (
    <div className={hidden ? 'hidden tile' : 'tile'} onClick={selectTile}>
      {value}
    </div>
  )
}

export default Tile
