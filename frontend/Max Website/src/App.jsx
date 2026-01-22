import { useState } from 'react'
import './App.css'
import {InputBox} from "./elements/InputBox.jsx";
import {Quotes} from "./elements/Quotes.jsx";




function App() {
  const [messages, setMessages] = useState([]);
  return (
    <div>
      <InputBox messages={messages} setMessages={setMessages} />
      <Quotes messages={messages} />
    </div>
  )
}

export default App
