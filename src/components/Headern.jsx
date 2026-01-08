import React from 'react';

function Headern() {
  return (
    <header className="header-container">
      <div className="header-title">
        <h1>My Application</h1>
      </div>
      <nav className="header-nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Headern;