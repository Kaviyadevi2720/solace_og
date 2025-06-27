import React from 'react';
import JournalingPrompts from './JournalingPrompts';
import LandingPage from './LandingPage';
import Chatbot from './Chatbot';

function App() {
  return (
    <div>
      <LandingPage />
      <Chatbot />
      <JournalingPrompts />
    </div>
  );
}

export default App;
