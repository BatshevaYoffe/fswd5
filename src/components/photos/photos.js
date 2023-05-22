import React, { useState, useEffect } from 'react';
//import './style.css';
import { Outlet, json } from 'react-router-dom';
import { useParams, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Photos = () => {
    const { id } = useParams();
    const [photos, setPhotos] = useState([]);
    const [showPhotos, setShowedPhotos] = useState(5); //  מספר התמונות המוצג בכל שלב ניתן לשנות


    useEffect(() => {
        console.log(id);
        fetch(`https://jsonplaceholder.typicode.com/album/${id}/photos`)
            .then(response => response.json())
            .then(data => {
                setPhotos(data);
            })

    }, []);
    const handleShowMorePhotos = () => {
        setShowedPhotos(prevPhotos => prevPhotos + 5); // הוספת 5 תמונות נוספות בכל לחיצה
    };

    return <div>
        <div>
            {photos.slice(0, showPhotos).map(photo => (
                <img src={photo.thumbnailUrl} alt={photo.title} key={photo.id} />
            ))}
        </div>
        {showPhotos < photos.length && (
            <button onClick={handleShowMorePhotos}>המשך</button>
        )}
    </div>
}; export default Photos;