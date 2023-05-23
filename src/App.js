import React from 'react';
//import './style.css';
import { Outlet } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Login from './components/login/login'
import Content from './components/content';
import Todos from './components/todos/todos';
import Album from './components/albums/albums';
import Post from './components/posts/posts';
import Info from './components/info/info';
import Photos from './components/photos/photos';
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="content/user/:id" element={<Content />}>
          <Route path="albums" element={<Album />} />
          <Route path="posts" element={<Post />} />
          <Route path="info" element={<Info />} />
          <Route path="todos" element={<Todos />} />

          <Route path="albums/:id/photos" element={<Photos />} />

        </Route>
      </Routes>
    </Router>
  );
}

