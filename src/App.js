import { useState, useEffect } from 'react';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
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

  const handleSubmit = event => {
    event.preventDefault()
    setDisplay(formData)
    console.log('this is display in the handleSubmit', display)
  }

  useEffect(() => {
    console.log('this is display in the useEffect', display)
  }, [display])

  return (
    <div className="App">
    </div>
  );
}

export default App;
