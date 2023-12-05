import React from 'react';
import ReactDOM from 'react-dom/client';
import user from './user.json';
// import { App } from 'components/App';
import './index.css';
import { Profile } from 'components/Profile';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  </React.StrictMode>
);