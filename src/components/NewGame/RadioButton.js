import React from 'react'

import './RadioButton.css'

function RadioButton({ label, value, onChange }) {
  return (
    <label>
      <input type='radio' checked={value} onChange={onChange} />
      {label}
    </label>
  )
}

export default RadioButton
