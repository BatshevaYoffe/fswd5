import React, { useState, useEffect } from 'react';
//import './style.css';
import { Outlet, json } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const Info = () => {
    const [user, setMyObject] = useState({});

    useEffect(() => {
        const objectData = JSON.parse(localStorage.getItem('myData'));
        setMyObject(objectData);
    }, []);

    return!user.name?(<div>bdika</div>):(<div>
          <h1>{user.name}</h1>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
          <h2>Address:</h2>
          <p>{user.address.street}</p>
        <p>{user.address.suite}</p>
          <p>{user.address.city}</p><p> {user.address.zipcode}</p>
          <p>Lat: {user.address.geo.lat}</p><p> Lng: {user.address.geo.lng}</p>
          <h2>Company:</h2>
          <p>{user.company.name}</p>
          <p>{user.company.catchPhrase}</p>
          <p>{user.company.bs}</p> 
        </div>
      );
}
export default Info;

