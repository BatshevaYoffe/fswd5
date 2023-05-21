
//import './style.css';
import { Outlet, json, useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const Post = (props) => {
    //exrtact user from local storage
    const [user, setMyObject] = useState({});
    useEffect(() => {
        const objectData = JSON.parse(localStorage.getItem('myData'));
        setMyObject(objectData);
        console.log("user");
    }, []);
    // all posts for this user
    const [activeUsers, setActiveUsers] = useState([]);

    useEffect(() => {

        let id=user.id;
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
            .then(response => response.json())
            .then(data => {
                // const activeUsersData = data.filter(user => user.user.id);
                console.log(data);
                setActiveUsers(data);
            })
            .catch(error => console.log(error));
    }, [user]); // dependency for user

    return <div>
        <ul>
                {activeUsers.map(activeUser => (
                    <li key={activeUser.userId}>
                        
                        <span>{activeUser.title}</span>
                    </li>
                ))}
            </ul>
    </div>
}; export default Post;