import React, { useState } from "react";

function Callback({ getColor}) {
  const [activeColor, setActiveColor] = useState(null);

  const handleChange = (e) => {
    const { value } = e.target;
    setActiveColor(value);
    getColor(value);
  };

  return (
    <input
      type="text"
      id = "input"
      aria-label="input"
      value={activeColor}
      onChange={handleChange}
    />
  );
}

export default Callback;
