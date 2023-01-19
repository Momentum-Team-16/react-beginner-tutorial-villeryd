import React, { useState } from 'react'
import './App.css';
import ColorChangeButton from './colorChangeButton';

function App() {
    const [color, setColor] = useState('')
    console.log(color)
  return (
    <div className={'react-root ' + color}>
      <div className='centered'>
        <h1>Color Picker</h1>
        <ColorChangeButton color='red' setColor={setColor}/>
        <ColorChangeButton color='blue' setColor={setColor}/>
        <ColorChangeButton color='green' setColor={setColor}/>
      </div>
    </div>
  )
}

export default App;
