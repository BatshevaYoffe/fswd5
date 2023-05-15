import React from 'react';
//import './style.css';
//import {Login} from './components.login.login.js' 
import {Login1} from './components/login/login.js'
import { Outlet } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



export default function App() {
  // const navigate = useNavigate();

  // navigate("/login");

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login1 />} />
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="content" element={<Content />}>
          <Route path="a" element={<A />} />
          <Route path="b" element={<B />} />
        </Route>
      </Routes>
    </Router>
  );
}

// fetch('https://jsonplaceholder.typicode.com/photos')
// .then(response => response.json())
//    .then(json =>console.log(json.albumId))

const Login = () => {}
<div>
{/* <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form> */}
<div>login
  <Link to="content">login</Link>
  </div>
</div>;

const Content = () => (
  <div>
    <Link to="a" > to A</Link><br />
    <Link to="b" > to B</Link><br />
    <Link to="/" > to Login</Link>
    <div>content</div>
    <Outlet />
  </div>
);

const A = () => <div>A</div>;

const B = () => <div>B</div>;
