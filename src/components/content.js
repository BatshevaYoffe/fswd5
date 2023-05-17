import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link, Navigate, useNavigate } from 'react-router-dom';
// import Login from './components/login/login'

const Content = () => {

    const [user, setMyObject] = useState({});

    useEffect(() => {
        const objectData = JSON.parse(localStorage.getItem('myData'));
        setMyObject(objectData);
    }, []);

    const deleteUser = () => {
        localStorage.clear();
    }

    return (
        <div>
            <header>{user.username}</header>
            <Link to="posts">Posts</Link>
            <br />
            <Link to="albums">Albums</Link>
            <br />
            {/* <Link to={{
                pathname: '/info',
                state: { data: user }
            }}>Go to My Page</Link> */}
            <br />

            <Link to="info" >Info</Link>
            <br />
            <Link to="todos">Todos</Link>
            <br />
            <Link to="/" onClick={deleteUser}>Logout</Link>
            <Outlet />
        </div>
    )
}; export default Content;
