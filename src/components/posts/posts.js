
//import './style.css';
import { Outlet, json, useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { Link, Navigate, useNavigate } from 'react-router-dom';
import {useParams, Link, Navigate, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


const Post = (props) => {

    const [userPosts, setuserPosts] = useState([]);
    const { id } = useParams();
    const [showResults, setShowResults] = React.useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        // if ((user && user.id)) {
            console.log("posts");
            const objectData = JSON.parse(localStorage.getItem('myUserposts'));
            if (objectData) {
                setuserPosts(objectData);
                console.log(objectData);
            }
            else {
                fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                    .then(response => response.json())
                    .then(data => {
                        setuserPosts(data);
                        localStorage.setItem("myUserposts", JSON.stringify(data));
                        console.log(data);
                    })
                    .catch(error => console.log(error));
            }
        // }
    }, []);
    /*
    //exrtact user from local storage
    const [user, setMyObject] = useState({});
    useEffect(() => {
        const objectData = JSON.parse(localStorage.getItem('myData'));
        setMyObject(objectData);
        console.log("user");
    }, []);*/

    // all posts for this user
    /*
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
    */
   const handleClick = event => {
    if (event.currentTarget.style.fontWeight) {
      event.currentTarget.style.fontWeight = null;
    } else {
      event.currentTarget.style.fontWeight = 'bold';
    }
    //event.currentTarget.style.fontWeight=="normal"?
    //event.currentTarget.style.fontWeight ="bold":
    //event.currentTarget.style.fontWeight ="normal";
    //event.currentTarget.style.backgroundColor = 'salmon';
    //event.currentTarget.style.color = 'white';
  };

  const handleClickComments = ((event,idUser) => {
    console.log(idUser);
    let result = userPosts.find(({ id }) => id === idUser);
    let comments= result.body;
    console.log(comments);
    console.log(event);
    //event.currentTarget.value= comments;
    //return <div><p>{result.body}</p></div>
})

    return (    <div>
        <ul>
                {userPosts.map(post => (
                    <li key={post.userId}>
                         
                        { <span onClick={handleClick}>{post.title}</span> }
                       
                        <Link to={`${post.id}/comments`}>{"..."}</Link>
                    </li>
                ))}
            </ul>
    </div>)
}; export default Post;


           