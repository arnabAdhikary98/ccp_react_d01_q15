import React, { useState } from 'react';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('Home');

  const renderContent = () => {
    switch (activePage) {
      case 'Home':
        return <h2>Welcome to Home</h2>;
      case 'About':
        return <h2>About Us</h2>;
      case 'Contact':
        return <h2>Contact Us</h2>;
      default:
        return <h2>Welcome to Home</h2>;
    }
  };

  return (
    <div>
      <nav style={{ marginBottom: '20px' }}>
        <button onClick={() => setActivePage('Home')}>Home</button>
        <button onClick={() => setActivePage('About')}>About</button>
        <button onClick={() => setActivePage('Contact')}>Contact</button>
      </nav>
      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
}

export default App;
