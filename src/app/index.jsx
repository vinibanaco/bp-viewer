import React, { useState } from 'react';

const App = () => {
  const [url, setUrl] = useState('');
  const [startPage, setStartPage] = useState('');
  const [endPage, setEndPage] = useState('');

  const resetFields = () => {
    setUrl('');
    setStartPage('');
    setEndPage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    resetFields();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="url">
        URL:
        <input id="url" value={url} onChange={(e) => setUrl(e.target.value)} />
      </label>

      <br />

      <label htmlFor="startPage">
        Páginas:
        <input id="startPage" value={startPage} onChange={(e) => setStartPage(e.target.value)} />
      </label>
      <label htmlFor="endPage">
        até
        <input id="endPage" value={endPage} onChange={(e) => setEndPage(e.target.value)} />
      </label>

      <br />

      <button type="submit">Visualizar</button>
    </form>
  );
};

export default App;
