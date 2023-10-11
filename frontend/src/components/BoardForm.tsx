import React, { useState } from "react";

function BoardForm() {
  const [boardData, setBoardData] = useState({ title: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBoardData({ ...boardData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:3000/boards/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: boardData.title,
        }),
      });
  
      if (response.ok) {
        const newBoard = await response.json();
        console.log('New board created:', newBoard);
        setBoardData({ title: '' }); 
      } else {
        console.error('Failed to create a new board.');
      }
    } catch (error) {
      console.error('Error creating board:', error);
    }
  };

  return (
    <div>
      <h2>Create a New Board</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={boardData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button type="submit">Create Board</button>
        </div>
      </form>
    </div>
  );
}

export default BoardForm;