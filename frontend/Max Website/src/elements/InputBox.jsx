import { useState } from 'react'

export function InputBox() {
  const [inputText, setInputText] = useState("");
  const [inputPerson, setInputPerson] = useState("");


  const insertMessage = async (message, person) => {
    const res = await fetch("http://localhost:3000/api/sendMessage", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message, person}),
  });

    const data = await res.json();
    console.log("Inserted:", data);
  };

  const sendMessage = () => {
    insertMessage(inputText, inputPerson);
  };

  return (
    <>
      <h1>You just got clocked</h1>
      <h4>Type the quote and the person that said it </h4>

      <input 
        id="text_button"
        type="text" 
        placeholder="Quote..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      
      <input 
        id="person_button"
        type="text" 
        placeholder="Person..."
        value={inputPerson}
        onChange={(e) => setInputPerson(e.target.value)}
      />
  

      <button onClick={sendMessage}> Submit </button>
    </>
    //Last line is probably deciphering JSON data into normal messages
  );
  
}

