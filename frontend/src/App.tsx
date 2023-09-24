import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/`)
      .then((response) => response.json())
      .then((data) => setMessage(data));
  }, []);

  return (
    <div className="App">
      <h1>MERN with TypeScript</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
