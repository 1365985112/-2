import React, { useState } from 'react';

const TransferBox = () => {
  const [leftItems, setLeftItems] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
    { id: 5, name: 'Item 5' },
  ]);
  const [rightItems, setRightItems] = useState([]);

  const moveRight = () => {
    const selectedItems = leftItems.filter(item => item.selected);
    setRightItems([...rightItems, ...selectedItems]);
    setLeftItems(leftItems.filter(item => !item.selected));
  };

  const moveLeft = () => {
    const selectedItems = rightItems.filter(item => item.selected);
    setLeftItems([...leftItems, ...selectedItems]);
    setRightItems(rightItems.filter(item => !item.selected));
  };

  const handleCheckboxChange = (event, list, itemId) => {
    const updatedList = list.map(item => {
      if (item.id === itemId) {
        item.selected = event.target.checked;
      }
      return item;
    });
    if (list === leftItems) {
      setLeftItems(updatedList);
    } else {
      setRightItems(updatedList);
    }
  };

  return (
    <div>
      <div>
        <h3>左侧列表</h3>
        {leftItems.map(item => (
          <div key={item.id}>
            <input
              type="checkbox"
              checked={item.selected}
              onChange={event => handleCheckboxChange(event, leftItems, item.id)}
            />
            {item.name}
          </div>
        ))}
      </div>
      <div>
        <button onClick={moveRight}>&gt;</button>
        <button onClick={moveLeft}>&lt;</button>
      </div>
      <div>
        <h3>右侧列表</h3>
        {rightItems.map(item => (
          <div key={item.id}>
            <input
              type="checkbox"
              checked={item.selected}
              onChange={event => handleCheckboxChange(event, rightItems, item.id)}
            />
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransferBox;