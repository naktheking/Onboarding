import { useState } from 'react'
import './App.css'
import {InputBox} from "./elements/InputBox.jsx";
import {Quotes} from "./elements/Quotes.jsx";




function App() {
  return (
    <div>
      <InputBox />
      <Quotes />
    </div>
  )
}

export default App
