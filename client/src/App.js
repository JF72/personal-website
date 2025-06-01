import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HelloPage from './components/HelloPage'; //Referencing the page 
import './App.css';

function Home() {
  const [pong, setPong] = useState(null);

  useEffect(() => {
    fetch('/api/ping')
      .then((res) => res.json())
      .then((data) => setPong(data.message))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>My Personal Site</h1>
      {pong ? <p>Backend says: {pong}</p> : <p>Loading…</p>}
      <main>
        <p><Link to="/hello">Go to the test page</Link></p>
      </main>
    </div>
  );
}

export default function App(){
  return (
    <Router>
      <Routes>
        <Route path = "/" element={<Home />} />
        <Route path = "/hello" element={<HelloPage />} /> {/* These are the links*/}
      </Routes>
    </Router>
  );
}
