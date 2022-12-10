import { useState, useEffect } from 'react';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
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
      <Box>
        <Paper>
          <List>
            <ListItem>
              <ListItemText
                primary={`${display.firstName} ${display.lastName}`}
                secondary='Name'
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText
                primary={display.email}
                secondary='Email'
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText
                primary={display.location}
                secondary='Location'
              />
            </ListItem>
          </List>
        </Paper>
      </Box>


      <Box>
        <Paper>
          <form onSubmit={handleSubmit}>
            <TextField
              type='text'
              name='firstName'
              label='First Name'
              value={formData.firstName}
              onChange={handleChange}
            />
            <TextField
              type='text'
              name='lastName'
              label='Last Name'
              value={formData.lastName}
              onChange={handleChange}
            />
            <TextField
              type='text'
              name='email'
              label='Email'
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              type='text'
              name='location'
              label='Location'
              value={formData.location}
              onChange={handleChange}
            />
            <Button type='submit'>Submit</Button>
          </form>
        </Paper>
      </Box>
    </div>
  );
}

export default App;
