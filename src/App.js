import { useState, useEffect } from 'react';
import Form from './Components/Form';
import Display from './Components/Display';
import './App.css';

function App() {

  const [display, setDisplay] = useState({
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'random@email.com',
    location: 'Boston'
  })

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    location: ''
  })

  const handleChange = event => {
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event, formData) => {
    event.preventDefault()
    setDisplay(formData)
    console.log('this is display in the handleSubmit', display)
  }

  useEffect(() => {
    console.log('this is display in the useEffect', display)
  }, [display])

  return (
    <div className="App">
      <Display display={display} />
      <Form handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
