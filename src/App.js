import React from 'react';
import Dropdown from './Dropdown';
import './App.css'; // Import the CSS file for styling

const App = () => {
  const items = [
    { label: 'Yes', value: 'yes' },
    { label: 'probably Not', value: 'no' },
  ];

  return (
    <div className="app-container"> {/* Add a container div */}
      <h1 className="app-heading">Should you use a Dropdown</h1> {/* Apply CSS class to heading */}
      <div className="dropdown-container"> {/* Add a container for the dropdown */}
        <Dropdown items={items} />
      </div>
    </div>
  );
};

export default App;
