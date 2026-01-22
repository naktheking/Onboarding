import { useState } from 'react'
import './App.css'
import {InputBox} from "./elements/InputBox.jsx";


function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <InputBox />
    </div>
  )
}

export default App
