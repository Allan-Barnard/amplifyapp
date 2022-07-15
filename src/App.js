import { useRoutes } from "react-router-dom";
import Themeroutes from "./routes/Router";
import logo from "./LOGO_Apps_Associates_144w.png";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";
import React, { useEffect, useState } from 'react'
import Amplify, { API, graphqlOperation } from 'aws-amplify'

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const initialState = { name: '', description: '' }

function App({signOut}) {
  const routing = useRoutes(Themeroutes);
  const [formState, setFormState] = useState(initialState)
  const [todos, setTodos] = useState([])
  
  return (
    <View className="App">
      <Card>
        <Image src={logo} className="App-logo" alt="logo" />
		<Button onClick={signOut} marginLeft="75%">Sign Out</Button>
		<h1>AI/ML Apps Associates</h1>
      </Card>
	  <div className="dark">{routing}</div>
    </View>
  );
};

const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
  todo: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  todoName: { fontSize: 20, fontWeight: 'bold' },
  todoDescription: { marginBottom: 0 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}

export default withAuthenticator(App);
