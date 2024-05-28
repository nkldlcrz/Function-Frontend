import React, { useState } from 'react';

const App = () => {
  const [itemName, setItemName] = useState('');
  const [price, setPrice] = useState('');
  const [message, setMessage] = useState('');
  const [itemPrices, setItemPrices] = useState({});

  
  const setItemPrice = () => {
    const itemPrice = parseFloat(price);
    if (isNaN(itemPrice) || itemPrice <= 0) {
      setMessage("Error: Price must be a number greater than zero");
      return;
    }
    setItemPrices({ ...itemPrices, [itemName]: itemPrice });
    setMessage(`Price of ${itemName} set to ${price} ETH`);
  };

  
  const getItemPrice = () => {
    const itemPrice = itemPrices[itemName];
    if (itemPrice === undefined) {
      setMessage(`Error: Price is not set for ${itemName}`);
      return;
    }
    setMessage(`Price of ${itemName} is ${itemPrice} ETH`);
  };

  
  const resetItemPrice = () => {
    if (itemPrices[itemName] === undefined) {
      setMessage(`Error: Price is not set for ${itemName}`);
      return;
    }
    const updatedPrices = { ...itemPrices };
    delete updatedPrices[itemName];
    setItemPrices(updatedPrices);
    setMessage(`Price of ${itemName} has been reset`);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', fontFamily: 'Arial, sans-serif', background: 'transparent' }}>
      <div style={{ maxWidth: '600px', width: '100%', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
        <h1 style={{ color: '#333', textAlign: 'center' }}>Item Pricer</h1>
        <div style={{ marginBottom: '10px' }}>
          <input 
            type="text" 
            placeholder="Item Name" 
            value={itemName} 
            onChange={(e) => setItemName(e.target.value)} 
            style={{ padding: '8px', marginRight: '10px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px', width: 'calc(50% - 10px)' }}
          />
          <input 
            type="text" 
            placeholder="Price in ETH" 
            value={price} 
            onChange={(e) => setPrice(e.target.value)} 
            style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px', width: 'calc(50% - 10px)' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <button 
            onClick={setItemPrice} 
            style={{ padding: '5px 10px', borderRadius: '3px', border: 'none', backgroundColor: '#000', color: '#ffffff', cursor: 'pointer', fontSize: '14px', marginRight: '10px' }}
          >
            Set Item Price
          </button>
          <button 
            onClick={getItemPrice} 
            style={{ padding: '5px 10px', borderRadius: '3px', border: 'none', backgroundColor: '#000', color: '#ffffff', cursor: 'pointer', fontSize: '14px', marginRight: '10px' }}
          >
            Get Item Price
          </button>
          <button 
            onClick={resetItemPrice} 
            style={{ padding: '5px 10px', borderRadius: '3px', border: 'none', backgroundColor: '#000', color: '#ffffff', cursor: 'pointer', fontSize: '14px' }}
          >
            Reset Item Price
          </button>
        </div>
        <p style={{ margin: '10px 0', fontWeight: 'bold', color: '#333', textAlign: 'center' }}>{message}</p>
      </div>
    </div>
  );
};

export default App;

