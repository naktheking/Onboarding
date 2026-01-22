import { useState } from 'react'
import './App.css'
import {InputBox} from "./elements/InputBox.jsx";
// import {InputBox} from "./elements/Quotes.jsx";




function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <InputBox />
    </div>
  )
}

export default App
