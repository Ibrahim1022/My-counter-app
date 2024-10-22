import React, { useState } from 'react';

function App() {
  const [list, setList] = useState(["Cake", "Apple", "Cookies"]);

  function addToList() {
    // You can implement the logic to add new items here.
  }

  return (
    <div className="App">
      <h3 style={{ color: 'white' }}>Shopping List 📑</h3>
      <div className="form">
        <input type="text" />
        <button onClick={addToList}>+</button>
      </div>
      <ol>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
