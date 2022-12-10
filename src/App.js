import { useState } from 'react';
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
    <div className="App"></div>
  );
}

export default App;
