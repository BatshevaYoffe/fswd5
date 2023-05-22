import React, { useState, useEffect } from 'react';
//import './style.css';
import { Outlet, json } from 'react-router-dom';
import { useParams, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Photos = () => {
    const [userAlbums, setUserAlbums] = useState([]);
    const { id } = useParams();
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/album/6/photos`)
            .then(response => response.json())
            .then(data => {
                setPhotos(data);
            })

    }, []);

    return <div><h1>{photos.thumbnailUrl}</h1>
        <div>{photos.map(photos => (<img src={photos.thumbnailUrl} alt={photos.title}></img>))}</div>
    </div>
}; export default Photos;