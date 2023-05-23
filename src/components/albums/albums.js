import React, { useState, useEffect } from 'react';
//import './style.css';
import { Outlet, json } from 'react-router-dom';
import { useParams, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './albums.css'
const Album = () => {
    const [userAlbums, setUserAlbums] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
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
        <h2>Albums</h2>
        {userAlbums.map(album => (<div key={album.id}>
            <div className="album-box">
                <Link to={`${album.id}/photos`} className="link-square">
                    <img
                        src="https://png.pngtree.com/png-vector/20230228/ourmid/pngtree-image-line-icon-vector-png-image_6623891.png"
                        alt="אייקון אלבום"
                        className="album-icon"
                    />                              
                    {album.title}
                </Link>
            </div>
            <br />
        </div>))}
    </div>
}; export default Album;