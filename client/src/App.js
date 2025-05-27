import { useEffect, useState } from 'react';

function App() {
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
    </div>
  );
}

export default App;
