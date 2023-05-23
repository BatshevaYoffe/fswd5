import React, { useState, useEffect } from 'react';
//import './style.css';
import { Outlet, json } from 'react-router-dom';
import { useParams, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './comments.css'

const Comments = () => {
    const { id } = useParams();

    const [userComments, setcomments] = useState([]);
    useEffect(() => {
                console.log(id);
                fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
                    .then(response => response.json())
                    .then(data => {
                        setcomments(data);
                        console.log(data);
                    })
                .catch(error => console.log(error));
             }, [id]);
    return(
        <div >
            <h1 className='comments'>Comments</h1>

            <ul className='comments-items'>
                {userComments.map(com => (
                    <li key={com.Id}>
                         
                        <span >{com.body}</span>
                        
                    </li>
                ))}
            </ul>
        </div>);
}; export default Comments
