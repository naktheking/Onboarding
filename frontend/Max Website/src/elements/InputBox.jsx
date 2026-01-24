import { useState } from 'react'
import clockImg from "../assets/clock_image.png"

export function InputBox( {setMessages} ) {
  const [inputText, setInputText] = useState("");
  const [inputPerson, setInputPerson] = useState("");
  const [showClock, setShowClock] = useState(false);


  const insertMessage = async (message, person) => {
    const res = await fetch("/api/sendMessage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, person}),
  });
  
  if (!res.ok) {
    const text = await res.text(); // <-- this will reveal the real error
    throw new Error(`HTTP ${res.status}: ${text}`);
  }

    const data = await res.json();
    console.log("Inserted:", data);
  };

  const sendMessage = async () => {
    if (inputText.trim() === "") return;
    
    const personToSend = inputPerson.trim() === "" ? "Unknown" : inputPerson;
    
    // show clock
    setShowClock(true);
    // hide it after animation finishes (match CSS duration)
    window.setTimeout(() => setShowClock(false), 700);

  const tempId = crypto.randomUUID();
  setMessages((prev) => [
    { _id: tempId, message: inputText, person: personToSend, createdAt: new Date().toISOString() },
    ...prev,
  ]);

   
    try {
    const saved = await insertMessage(inputText, personToSend);
    // replace temp item with real saved doc (optional but nice)
    setMessages((prev) => [saved, ...prev.filter((m) => m._id !== tempId)]);
    setInputText("");
    setInputPerson("");
  } catch (err) {
      console.error(err);
      // rollback optimistic update if it failed
      setMessages((prev) => prev.filter((m) => m._id !== tempId));
      alert(err.message);
    }
  };

  return (
    <div style={{position: "relative"}}>
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

      {showClock && (
        <img
        src={clockImg}
        alt="clock"
        className="clock-pop"
        onAnimationEnd={() => setShowClock(false)}
        />
      )}
    </div>
  );
  
}