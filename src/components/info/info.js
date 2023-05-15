import React, { useState } from 'react';
//import './style.css';
import { Outlet, json } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Info = (props) => {

    const [user,setUser] = useState({})

    const setUserInfo = (user) => {
        setUser(user);
    }
        fetch(`https://jsonplaceholder.typicode.com/users/1`)
        // fetch(`https://jsonplaceholder.typicode.com/users${props.userId}`)
             .then(response => response.json())
            .then(json => {  setUserInfo(json) } );

    return <div>

        Infoooooooooooooooo
        {user.id}
        <div>
      <h2>{user.name}</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <h3>Address:</h3>
      {/* <p>{user.address.street}, {user.address.suite}</p> */}
      {/* <p>{user.address.city}, {user.address.zipcode}</p> */}
      {/* <p>Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}</p> */}
      <h3>Company:</h3>
      {/* <p>{user.company.name}</p>
      <p>{user.company.catchPhrase}</p>
      <p>{user.company.bs}</p> */}
    </div>
    </div>
}; export default Info;