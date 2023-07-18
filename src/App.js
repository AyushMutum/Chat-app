import React from "react";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const App = () => {
 const handleLogout = () => {
    // Clear username and password from localStorage
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    // Reload the page to show the login form again
    window.location.reload();
  };

  // Check if the user is logged in by checking the existence of username in localStorage
  if (!localStorage.getItem('username')) {
    return <LoginForm />;
  }

  return (
    <div className="chat-card-wrap">
      {/* Add a logout button */}
      <button className="logout-button" onClick={handleLogout}>Logout</button>
      <ChatEngine
        height="100vh"
        projectID="227f55b0-7e1a-49dd-9fc6-5bd08b7177b5"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(ChatAppProps) => <ChatFeed {...ChatAppProps} />}
        
      />
      
    </div>
  );
}

export default App;
