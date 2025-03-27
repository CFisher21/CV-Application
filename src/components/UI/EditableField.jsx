import React, { useState } from 'react';

function EditableField({ initialValue, onSave, className, maxLength, type, side}) {
    const [value, setValue] = useState(initialValue);
    const [editing, setEditing] = useState(false);
    const handleKeyDown = (e) => {

      if (e.key === 'Enter') {

        onSave(value);
        setEditing(false);
      }
    };
    

    return (
      <>
        {editing ? (
          <input
            type={type}
            className={side}
            maxLength={maxLength}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={() => {
              onSave(value);
              setEditing(false);
            }}
            autoFocus
          />
        ) : (
          <span onClick={() => setEditing(true)} className={className}>
            {value}
          </span>
        )}
      </>
    );
  }

export default EditableField;