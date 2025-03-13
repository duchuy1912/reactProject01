import React, { useState } from 'react';
function Button() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);  // Tăng count lên mỗi khi nút được nhấn
  }
  function stopClick(){
    setCount(0);
  }
  return (
    <div>
      <button onClick={handleClick}>You clicked {count} times</button>
      <button onClick={stopClick}>Reset about 0</button>
    </div>
  );
}
export default Button;