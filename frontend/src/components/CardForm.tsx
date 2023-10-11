import React, { useState } from 'react';

interface CardFormProps {
  onCreateCard: (newCardData: { title: string }) => void;
}

const CardForm: React.FC<CardFormProps> = ({ onCreateCard }) => {
  const [cardData, setCardData] = useState({ title: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardData({ ...cardData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreateCard(cardData);
    setCardData({ title: '' }); // Reset the form
  };

  return (
    <div>
      <h2>Create a New Card</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={cardData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button type="submit">Create Card</button>
        </div>
      </form>
    </div>
  );
};

export default CardForm;
