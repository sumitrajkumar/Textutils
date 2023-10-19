import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import About from './components/About';

import React, { useState } from 'react'
import Alert from './Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {


  const [mode, setMode] = useState('light');
  const [text, setText] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setText('light');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "sucess");
    }
    else {
      setMode('light');
      setText('dark');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "sucess");
    }
  }

  /*const togleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setText('light');
      document.body.style.backgroundColor = '#3c6b3c';
      showAlert("Dark mode has been enabled","sucess");
      //document.title = 'TextUtils-Dark Mode';
    }
    else {
      setMode('light');
      setText('dark');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","sucess");
    }
  }*/

  return (
    <>
      <Router>
      <Navbar title="WORD Counter" aboutText="About Us" mode={mode} text={text} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          
          <Route exact path="/about" element={<About mode={mode}/>} />
          <Route exact path="/" element={<TextForm heading="Enter The Text To Analyse" mode={mode} showAlert={showAlert} />}/>
        </Routes>
      </div>
      </Router>
    </>


  );
}

export default App;
