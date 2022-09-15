import AIML_Header from "../../layouts/AIML_Header";
import { CardBody } from "reactstrap";

import { useRoutes } from "react-router-dom";
import Themeroutes from "../../routes/Router";
import logo from "../../LOGO_Apps_Associates_144w.png";
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
  
  import awsExports from "../../aws-exports";

  const initialState = { name: '', description: '' }

function App({signOut}) {
  const routing = useRoutes(Themeroutes);
  const [formState, setFormState] = useState(initialState)
  const [todos, setTodos] = useState([])
  
  return (
    <View className="App">

<div>
      <AIML_Header />
	<Card>
	  <CardBody classname="">
	    <div>
          <h1>
		    AIML: User management
	      </h1>
	    </div>
	  </CardBody>
	</Card>
	</div>

      <Card>
		<Button onClick={signOut}>Create User</Button>
      </Card>
    </View>
  );
};

			
export default withAuthenticator(App);
