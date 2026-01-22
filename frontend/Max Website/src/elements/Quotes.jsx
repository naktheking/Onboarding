import { useState } from 'react'

export function Quotes() {
    const [messages, setMessages] = useState([]);

    const getMessage = async () => {
        const res = await fetch("http://localhost:3000/api/getMessage");
        const data = await res.json();
        setMessages(data);
    };

    useEffect(() => {
        getMessage();
    }, []);
    //runs this function when it renders and never again

  return (
    <div>
      <h1>Quotes</h1>

      {messages.map((msg) => (
        <div key={msg._id}>
          <p><b>{msg.person}</b>: {msg.message}</p>
        </div>
      ))}
    </div>
  );
  
}

