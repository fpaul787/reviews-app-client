import React from 'react';
import {Link} from 'react-router-dom'
import { Navbar } from "react-bootstrap"
import './App.css';

function App() {
  return (
    <div className="App container">
      <Navbar fiuld collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">9/10</Link>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    </div>
  );
}

export default App;
