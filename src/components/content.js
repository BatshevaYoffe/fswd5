import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './content.css'
const Content = () => {
    const navigate = useNavigate();
    const [user, setMyObject] = useState({});

    useEffect(() => {
        const objectData = JSON.parse(localStorage.getItem('myData'));
        setMyObject(objectData);
    }, []);

    const deleteUser = () => {
        localStorage.clear();
        navigate('/')
    }

    return (
        <div>
            <div className="nav-links menu-options">
                <nav className="top-menu">
                    <header className="page-header">{user.username}</header>

                    <Link className="nav-link" to="posts">Posts</Link>
                    <Link className="nav-link" to={`albums`}>Albums</Link>
                    <Link className="nav-link" to="info" >Info</Link>
                    <Link className="nav-link" to={`todos`}>Todos</Link>
                    {/* <Link className="nav-link" to="/" onClick={deleteUser}>Logout</Link> */}
                    <button className="logout-button" onClick={deleteUser}>
                        Logout
                    </button>
                </nav>
            </div>
            <div className="content">
                <Outlet />
            </div>
        </div>
    );
}; export default Content;
