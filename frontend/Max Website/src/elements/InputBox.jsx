import { useState } from 'react'

export function InputBox() {
  const [inputText, setInputText] = useState("");
  const [inputPerson, setInputPerson] = useState("");
  const [result, setResult] = useState(null);

  const insertMessage = async (message, person) => {
    const res = await fetch("http://localhost:3000/api/sendMessage", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message, person}),
  });

    const data = await res.json();
    console.log("Inserted:", data);
    setResult(data);
  };

  const sendMessage = () => {
    insertMessage(inputText, inputPerson);
  };

  return (
    <>
      <h1>hello</h1>
      <input 
        id="text_button"
        type="text" 
        placeholder="Enter your quote here"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      
      <input 
        id="person_button"
        type="text" 
        placeholder="Enter your Person here"
        value={inputPerson}
        onChange={(e) => setInputPerson(e.target.value)}
      />
  
      <br></br>

      <button onClick={sendMessage}> Hi I'm a button </button>
    </>
    //Last line is probably deciphering JSON data into normal messages
  );
  
}

