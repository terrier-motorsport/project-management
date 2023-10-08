import React, { useEffect, useState } from 'react';

function Board() {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/boards') 
      .then((response) => response.json())
      .then((data) => {
        setBoards(data.boards);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Boards</h1>
      <ul>
        {boards.map((board) => (
          <li key={board._id}>{board.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Board;
