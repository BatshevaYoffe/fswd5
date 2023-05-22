import React, { useState, useEffect } from 'react';
//import './style.css';
import { Outlet, json } from 'react-router-dom';
import { useParams, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link, Navigate, useNavigate } from 'react-router-dom';

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
onclick=()=>{
    console.log("onclick");
    // navigate('./photos');

}
    return <div>
        {userAlbums.map(album => (<div>
<button onClick={onclick}>{album.title}</button>
        {/* <Link to={`/albums/photos/${album.id}`}>{album.title}</Link> */}
        {/* <Link to={`../photos`}>{album.title}</Link> */}

        <br/>
        </div>))}
    </div>
}; export default Album;