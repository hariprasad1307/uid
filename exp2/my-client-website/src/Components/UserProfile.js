// src/UserProfile.js
import React from 'react';
import './UserProfile.css';

function UserProfile({ name, email, bio, avatarUrl }) {
  return (
    <div className="user-profile">
      <img src={avatarUrl} alt={`${name}'s avatar`} className="user-avatar" />
      <h1 className="user-name">{name}</h1>
      <p className="user-email">{email}</p>
      <p className="user-bio">{bio}</p>
    </div>
  );
}

export default UserProfile;
