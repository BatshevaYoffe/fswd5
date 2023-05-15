import React from 'react';
//import './style.css';
import { Outlet } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Login from './components/login/login'
import Content from './components/content';
import Todos from './components/todos/todos';
import Album from './components/albums/albums';
import Post from './components/posts/post';
import Info from './components/info/info';
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="content" element={<Content />}>
          <Route path="albums" element={<Album />} />
          <Route path="posts" element={<Post />} />
          <Route path="info" element={<Info />} />
          <Route path="todos" element={<Todos />} />

        </Route>
      </Routes>
    </Router>
  );
}

// const Content = () => (
//   <div>
//     {/* <Link to="a"> to A</Link>
//     <br />
//     <Link to="b"> to B</Link>
//     <br /> */}
//     <Link to="posts">Posts</Link>
//       <br />
//       <Link to="albums">Albums</Link>
//       <br />
//       <Link to="info">Info</Link>
//       <br />
//       <Link to="todos">Todos</Link>
//       <br />
//     <Link to="/"> to Login</Link>
//     <div>content</div>
//     <Outlet />
//   </div>
// );

const A = (props) => {
  const navigate = useNavigate();

  const f = () => navigate("/login");

  return <div>A <button type="button" onClick={f}>fdgh</button> </div>;
};

const B = () => <div>B</div>;
