import { useState } from 'react';
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


  return (
    <div className="App">
      <Box>
        <Paper>
          <form>
            <TextField
              type='text'
              name='firstName'
              label='First Name'
              value={formData.firstName}
            />
            <TextField
              type='text'
              name='lastName'
              label='Last Name'
              value={formData.lastName}
            />
            <TextField
              type='text'
              name='email'
              label='Email'
              value={formData.email}
            />
            <TextField
              type='text'
              name='location'
              label='Location'
              value={formData.location}
            />
            <Button type='submit'>Submit</Button>
          </form>
        </Paper>
      </Box>
    </div>
  );
}

export default App;
