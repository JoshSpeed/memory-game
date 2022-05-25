import { useState } from 'react'

import RadioButton from './RadioButton'

function NewGame() {
  const [difficulty, setDifficulty] = useState('')

  const handleEasyChange = () => {
    setDifficulty('easy')
  }
  const handleNormalChange = () => {
    setDifficulty('normal')
  }
  const handleHardChange = () => {
    setDifficulty('hard')
  }

  return (
    <div>
      <form>
        <RadioButton
          label='Easy'
          value={difficulty === 'easy'}
          onChange={handleEasyChange}
        />
        <RadioButton
          label='Normal'
          value={difficulty === 'normal'}
          onChange={handleNormalChange}
        />
        <RadioButton
          label='Hard'
          value={difficulty === 'hard'}
          onChange={handleHardChange}
        />

        <button>Start Game</button>
      </form>
    </div>
  )
}

export default NewGame
