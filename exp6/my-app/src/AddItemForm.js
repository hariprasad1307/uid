import React, { useState } from 'react';
import './App.css'; // Import the CSS file

const AddItemForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [items, setItems] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Add the new item to the list
        const newItem = { name, description, quantity };
        setItems([...items, newItem]);

        // Reset the form
        setName('');
        setDescription('');
        setQuantity(1);
    };

    return (
        <div className="form-container">
            <h2>Add New Item</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Item Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows="4"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="quantity">Quantity:</label>
                    <input
                        type="number"
                        id="quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        min="1"
                        required
                    />
                </div>

                <button type="submit">Add Item</button>
            </form>

            {/* Display the added items */}
            <div className="items-list">
                <h3 className="items-title">Added Items:</h3>
                {items.length > 0 ? (
                    <ul>
                        {items.map((item, index) => (
                            <li key={index} className="item">
                                <strong>{item.name}</strong> - {item.description} (Quantity: {item.quantity})
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No items added yet.</p>
                )}
            </div>
        </div>
    );
};

export default AddItemForm;
