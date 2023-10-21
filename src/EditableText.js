import React, { useEffect, useRef, useState } from 'react';

export default function EditableText({ sKey, value, headerObj, onUpdate, setAPIflag }) {
    // ref for Input field
    const inputRef = useRef(null);

    // state to store editable flag and text in Input/Span
    const [isEditable, setIsEditable] = useState(false);
    const [text, setText] = useState(value);

    // Listen for clicks outside of the input field
    useEffect(() => {
      function handleClickOutside(event) {
        /*
            Target element of click event doest not contains "editableText"
            then its a condition where click was done outside of any SPAN/INPUT.
        */ 
        if (inputRef.current && !event.target.className.includes("editableText")) {
          setIsEditable(false);
          setAPIflag(true);
        }
      }
  
      if (isEditable) {
        document.addEventListener('click', handleClickOutside);
      } else {
        document.removeEventListener('click', handleClickOutside);
      }
  
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, [isEditable]);

    // on double click set the field editable
    const handleDoubleClick = () => {
        setIsEditable(true);
      };
      
      
    // on change set the text in Span/Input and also update prop object headerObj
    const handleChange = (e) => {
      const { name, value } = e.target;
      setText(value);
      onUpdate({ ...headerObj, [name]: value });
    };

    return isEditable ? (
      <input
        className="editableText"
        type="text"
        name={sKey}
        value={text}
        onChange={handleChange}
        ref={inputRef}
      />
    ) : (
      <span className="editableText" onDoubleClick={handleDoubleClick}>{text}</span>
    );
}


