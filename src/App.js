import React from 'react';
import './App.css';
import {withAuthenticator, AmplifySignOut} from '@aws-amplify/ui-react';

function App() {
  return (
    <div className="App">
      <h3>Hello from app</h3>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
