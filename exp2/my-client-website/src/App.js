// src/App.js
import React from 'react';
import './App.css';
import UserProfile from './Components/UserProfile';

function App() {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    bio: "Software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success.",
    avatarUrl: "https://via.placeholder.com/120"
  };

  return (
    <div className="App">
      <UserProfile
        name={user.name}
        email={user.email}
        bio={user.bio}
        avatarUrl={user.avatarUrl}
      />
    </div>
  );
}

export default App;
