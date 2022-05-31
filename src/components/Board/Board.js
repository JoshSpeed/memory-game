import React from 'react'

import Tile from './Tile'

import './Board.css'

function Board({ difficulty, layout }) {
  return (
    <div className={`${difficulty} board`}>
      {layout.map((value) => (
        <Tile key={Math.random()} value={value} />
      ))}
    </div>
  )
}

export default Board
