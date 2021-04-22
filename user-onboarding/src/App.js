import axios from 'axios';
import * as yup from 'yup';
import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './Form';
import schema from './formSchema';
import User from './User'

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
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      // terms:  ["terms"].filter(
      //   (clicked) => formValues[clicked]
      // ),
    };
    postNewUser(newUser);
  };

  // Side Effects
  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);




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

      {users.map((user) => {
        return <User key={user.id} details={user} />;
      })}
    </div>
  );
}

export default App;
