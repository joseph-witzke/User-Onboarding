import axios from 'axios';
import * as yup from 'yup';
import React, {useState} from 'react';
import './App.css';
import Form from './Form';
import schema from './formSchema';

//Initial States//
const initialFormValues = {
  //Text Inputs//
  name: "",
  email: "",
  password: "",
  //Checkbox//
  terms: false,
};
const initialFormErrors = {
  name: "",
  email: "",
  password: "",
  terms: "",
};
const initialUsers = [];
const initialDisabled = true;

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const postNewUser = (newUser) => {
    axios.post("https://reqres.in/api/users", newUser)
    .then((res) => {
      setUsers([...users, res.data]);
      setFormValues(initialFormValues);
    })
    .catch((err) => {
      console.log(err);
    });
    
  }

  const inputChange = (name, value) => {

  }

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms:  ["terms"].filter(
        (clicked) => formValues[clicked]
      ),
    };
    postNewUser(newUser);
  };

  // Side Effects
  


  return (
    <div className="App">
      <header>
        <h1>User Form</h1>
      </header>

      <Form 
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
    </div>
  );
}

export default App;
