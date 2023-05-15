import React from 'react';
//import './style.css';
import { Outlet } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Login from './components/login/login'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="content" element={<Content />}>
          <Route path="a" element={<A prop1={true} />} />
          <Route path="b" element={<B />} />
        </Route>
      </Routes>
    </Router>
  );
}

// const Login = () => (
//   <div>
//     login
//     <Link to="/content">login</Link>
//   </div>
// );

const Content = () => (
  <div>
    <Link to="a"> to A</Link>
    <br />
    <Link to="b"> to B</Link>
    <br />
    <Link to="/"> to Login</Link>
    <div>content</div>
    <Outlet />
  </div>
);

const A = (props) => {
  const navigate = useNavigate();

  const f = () => navigate("/login");

  return <div>A <button type="button" onClick={f}>fdgh</button> </div>;
};

const B = () => <div>B</div>;
