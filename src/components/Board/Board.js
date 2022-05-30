import React from 'react'

import Tile from './Tile'

import './Board.css'

function Board({ difficulty }) {
  // Set amount of tiles depending on difficulty
  const boardSize =
    difficulty === 'hard' ? 18 : difficulty === 'normal' ? 12 : 8

  // Create an array with 2 of each value and then shuffle array
  let answers = []
  for (let i = 0; i < boardSize; i++) {
    answers.push(i)
    answers.push(i)
  }
  const shuffled = answers.sort(() => Math.random() - 0.5)

  return (
    <div className={`${difficulty} board`}>
      {shuffled.map((value) => (
        <Tile key={Math.random()} value={value} />
      ))}
    </div>
  )
}

export default Board
