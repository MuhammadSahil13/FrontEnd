import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Containers/home/home'
import Login from './Containers/Login';
import { useEffect, useState } from 'react'
import './App.css'
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  console.log("sahil  ")
  return (
    
    <div className="App container mx-auto">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
          />
           <Route
            path="/login"
            element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />}
          />
        </Routes>
      </BrowserRouter>

    
    </div>
  );
}

export default App;
