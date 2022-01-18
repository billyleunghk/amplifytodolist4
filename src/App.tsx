import React, { useEffect, useState, SetStateAction } from 'react';
//import './App.css';
import '@aws-amplify/ui-react/styles.css';

//import Amplify, { Auth } from 'aws-amplify'; //, { API, graphqlOperation }
import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react'
import { createTodo } from './graphql/mutations';
import { listTodos } from './graphql/queries';

import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import { AmplifyProvider } from '@aws-amplify/ui-react';
import { withAuthenticator } from '@aws-amplify/ui-react';


import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const initialState = { name: '', description: '' }


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello world!! in typescript
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default withAuthenticator(App);