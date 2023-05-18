import React, { useState, useEffect } from 'react';
//import './style.css';
import { Outlet, json } from 'react-router-dom';
import {useParams, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Album = () => {
    // const [user, setMyObject] = useState({});
    const [userAlbums, setUserAlbums] = useState([]);
    const { id } = useParams();

    // useEffect(() => {
    //     console.log(id);
    //     const objectData = JSON.parse(localStorage.getItem('myData'));
    //     setMyObject(objectData);
    // }, []);

    useEffect(() => {
      //  if ((user && user.id)) {
            const objectData = JSON.parse(localStorage.getItem('myUserAlbums'));
            if (objectData) {
                setUserAlbums(objectData);
            }
            else {
                fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums`)
                    .then(response => response.json())
                    .then(data => {
                        setUserAlbums(data);
                        localStorage.setItem("myUserAlbums", JSON.stringify(data));
                    })
                    .catch(error => console.log(error));
            }
      //  }
    }, []);



    return <div>
{userAlbums.map(album=>(<li>{album.title}</li>))}
    </div>
}; export default Album;