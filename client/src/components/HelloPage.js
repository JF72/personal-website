//most of this should be reusableWhat i
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
//import './HelloPage.css' if I want custom parts
export default function HelloPage(){
    const [greeting, setGreeting] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() =>{
        fetch('/api/hello').then(res => {
            if (!res.ok) throw new Error(`Status ${res.status}`);
            return res.json();
        }).then(data => setGreeting(data.greeting)).catch(err => setError(err.message));
    }, []);

    if (error){
        return <div style={{color: 'red'}}> Error: {error} </div>;
    }
    if (greeting === null) {
        return <div>Loading...</div>;
    }

    return(
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-body">
          <h2 className="card-title text-primary">
            {greeting || 'Loading…'}
          </h2>
          <p className="card-text">
            This is your first page, now styled with Bootstrap!
          </p>
          <Link to="/" className="btn btn-secondary">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
    );
}