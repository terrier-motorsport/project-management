import React, { useState } from 'react';

interface ColumnFormProps {
  onCreateColumn: (newColumnData: { name: string }) => void;
}

const ColumnForm: React.FC<ColumnFormProps> = ({ onCreateColumn }) => {
  const [columnData, setColumnData] = useState({ name: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setColumnData({ ...columnData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreateColumn(columnData);
    setColumnData({ name: '' }); // Reset the form
  };

  return (
    <div>
      <h2>Create a New Column</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={columnData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button type="submit">Create Column</button>
        </div>
      </form>
    </div>
  );
};

export default ColumnForm;