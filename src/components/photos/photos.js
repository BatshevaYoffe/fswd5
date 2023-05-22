import React, { useState, useEffect } from 'react';
//import './style.css';
import { Outlet, json } from 'react-router-dom';
import { useParams, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Photos = () => {
    const [userAlbums, setUserAlbums] = useState([]);
    const { id } = useParams();
    const [photos, setPhotos] = React.useState([]);

    useEffect(() => {
        // const objectData = JSON.parse(localStorage.getItem('myUserAlbums'));
        // if (objectData) {
        //     setUserAlbums(objectData);
        // }
        // else {
            const albumId = window.location.pathname.split('/').pop();
            fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums`)
            .then(response => response.json())
            .then(data => {
                setPhotos(data);
                // localStorage.setItem("myUserAlbums", JSON.stringify(data));
            })
        // }
        //  }
    }, []);

    return <div>
photossssssss    </div>
}; export default Photos;