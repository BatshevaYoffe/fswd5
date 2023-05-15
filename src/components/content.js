import React from 'react';
//import './style.css';
import { Outlet } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link, Navigate, useNavigate } from 'react-router-dom';
// import Login from './components/login/login'

const Content = () => {

    return (
    <div>
      <Link to="posts">Posts</Link>
      <br />
      <Link to="albums">Albums</Link>
      <br />
      <Link to="info">Info</Link>
      <br />
      <Link to="todos">Todos</Link>
      <br />
      <Link to="/"> to Login</Link>
      <div>content</div>
      <Outlet />
    </div>
)
};export default Content;
