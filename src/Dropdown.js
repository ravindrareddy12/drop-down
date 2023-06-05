import React, { useState } from 'react';

const Dropdown = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    const selectedOption = items.find((item) => item.value === selectedValue);
    setSelectedOption(selectedOption);
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div>
        <div className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
        <button className="dropdown-button" onClick={handleToggle}>
          {selectedOption ? selectedOption.label : 'Select an option'}
        </button>
        {isOpen && (
          <select
            value={selectedOption ? selectedOption.value : ''}
            onChange={handleSelectChange}
            style={{ display: isOpen ? 'block' : 'none' }}
          >
            <option value="">Select an option</option>
            {items.map((item, index) => (
              <option key={index} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        )}
         </div>
    </div>
  );
};


export default Dropdown;
