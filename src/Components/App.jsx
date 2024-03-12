import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home'
import Login from './Login';
import { useEffect, useState } from 'react'

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