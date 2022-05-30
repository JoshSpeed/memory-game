import { useContext } from 'react'

import { AppContext } from '../../App'

import RadioButton from './RadioButton'

import './NewGame.css'

function NewGame() {
  const { difficulty, setDifficulty, setGameStarted } = useContext(AppContext)

  const handleEasyChange = () => {
    setDifficulty('easy')
  }
  const handleNormalChange = () => {
    setDifficulty('normal')
  }
  const handleHardChange = () => {
    setDifficulty('hard')
  }

  const handleForm = (e) => {
    e.preventDefault()
    console.log(difficulty)
    setGameStarted(true)
  }

  return (
    <div className='formBar'>
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

        <button type='submit' onClick={handleForm}>
          Start Game
        </button>
      </form>
    </div>
  )
}

export default NewGame
