import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React,{useState} from 'react';
import Aboutus from './components/Aboutus'
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App(props) {
  const[mode,setMode] = useState("light");
  const showAlert = (type,message) =>{
    setAlert({
      type:type,
      message:message
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const togglemode = () =>{
    if(mode==="light"){
    setMode("dark")
    document.body.style.backgroundColor="#292872";
    showAlert("success","! dark mode enabled");
  }
  else{
    setMode("light");
    document.body.style.backgroundColor="white";
    showAlert("info","! dark mode disabled");
  }
}
  const [alert, setAlert] = useState(null);
  return (
    <>
    <Router>
    <Navbar title="my-app" aboutus="about us" Dropdown={props.first} mode={mode} togglemode={togglemode}/>
    <Alert alert={alert}/>
    <Routes>
      <Route path='/' element={<><div className="container my-3">
      <Textform heading="Enter your text below" mode={mode} alert={showAlert}/>
      </div></>}/>
      <Route path='/aboutus' element={<Aboutus mode={mode}/>}/>
      <Route path='/Home' element={<Home mode={mode}/>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
