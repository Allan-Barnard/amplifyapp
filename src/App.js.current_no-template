/* src/App.js */
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
import { createTodo } from './graphql/mutations'
import { listTodos } from './graphql/queries'
import Title from './Components/Title';
import Footer from './Components/Footer';
import Sidebar from './Components/Sidebar';

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const initialState = { name: '', description: '' }

function App({ signOut }) {
	
  const [formState, setFormState] = useState(initialState)
  const [todos, setTodos] = useState([])
  
  function setInput(key, value) {
  setFormState({ ...formState, [key]: value })
  }
  
  useEffect(() => {
    fetchTodos()
  }, [])
  
  async function fetchTodos() {
    try {
      const todoData = await API.graphql(graphqlOperation(listTodos))
      const todos = todoData.data.listTodos.items
      setTodos(todos)
    } catch (err) { console.log('error fetching todos') }
  }
  
  async function addTodo() {
    try {
      if (!formState.name || !formState.description) return
      const todo = { ...formState }
      setTodos([...todos, todo])
      setFormState(initialState)
      await API.graphql(graphqlOperation(createTodo, {input: todo}))
    } catch (err) {
      console.log('error creating todo:', err)
    }
  }
  
  async function deleteTodo() {
	  try{
		  todos.splice(0, 1)
		  setFormState(initialState)
		  await API.graphql(graphqlOperation(deleteTodo, {input: todos[0]}))
	  } catch (err) {
		  console.log('error deleting todo:', err)
	  }
  }
  
  return (
    <View className="App">
      <Card>
        <Image src={logo} className="App-logo" alt="logo" />
		<div style={styles.container}>
		  <Title />
		  <div className="App" id="outer-container">
			<Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
			<div id="page-wrap">
			  <h1>Check the application menu</h1>
			  <hr/>
			</div>
		  </div>
		  <h2>Amplify Todos</h2>
		  <input
		  onChange={event => setInput('name', event.target.value)}
		  style={styles.input}
		  value={formState.name}
		  placeholder="Name"
		  />
		  <input
		  onChange={event => setInput('description', event.target.value)}
		  style={styles.input}
		  value={formState.description}
		  placeholder="Description"
		  />
		  <button style={styles.button} onClick={addTodo}>Create Todo</button>
		  <hr/>
		  <button style={styles.button} onClick={deleteTodo}>Delete Todo</button>
		  {
            todos.map((todo, index) => (
            <div key={todo.id ? todo.id : index} style={styles.todo}>
              <p style={styles.todoName}>{todo.name}</p>
              <p style={styles.todoDescription}>{todo.description}</p>
            </div>
            ))
          }
		  <Footer />
		</div>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
  todo: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  todoName: { fontSize: 20, fontWeight: 'bold' },
  todoDescription: { marginBottom: 0 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}

export default withAuthenticator(App);
