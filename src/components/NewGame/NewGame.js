import { useContext } from 'react'

import { AppContext } from '../../App'

import RadioButton from './RadioButton'

import './NewGame.css'

function NewGame() {
  const { difficulty, setDifficulty, setGameStarted, setLayout } = useContext(
    AppContext
  )

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
    setLayout(shuffled)
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
