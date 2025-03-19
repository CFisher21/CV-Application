import React, { useState } from 'react';
import EditableField from './EditableField';

function ExpandableList({ initialValue = [] , buttonName, listItemName}) {
    const [items, setItems] = useState(initialValue);

    // Function to update a specific list item
    const updateItem = (index, newValue) => {
        const updatedItems = [...items];
        updatedItems[index] = newValue;
        setItems(updatedItems);
    };

    // Function to add a new list item
    const addListItem = () => {
        setItems([...items, `New ${listItemName} ${items.length + 1}`]); 
    };

    // Function to remove a specific list item
    const removeItem = (index) => {
        setItems(items.filter((_, i) => i !== index));
    };

    return (
        <>
            <ul className="skillsList">
                {items.map((item, index) => (
                    <li key={index} className="listItem">
                        <EditableField
                            initialValue={item}
                            onSave={(newValue) => updateItem(index, newValue)}
                            className="editable-item"
                            maxLength={50}
                            type="text"
                        />
                        <button className="deleteBtn" onClick={() => removeItem(index)}>X</button>
                    </li>
                ))}
            </ul>
            <button className="addSkill" onClick={addListItem}>{buttonName}</button>
        </>
    );
}

export default ExpandableList;
