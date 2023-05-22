import React, { useState, useEffect } from 'react';
import './info.css'

const Info = () => {
  const [user, setMyObject] = useState({});

  useEffect(() => {
    const objectData = JSON.parse(localStorage.getItem('myData'));
    setMyObject(objectData);
  }, []);

  return !user.name ? (<div>bdika</div>) : (
    <div className="user-profile">
      <h1 className="user-name">{user.name}</h1>
      <p className="username">Username: {user.username}</p>
      <p className="email">Email: {user.email}</p>
      <p className="phone">Phone: {user.phone}</p>
      <p className="website">Website: {user.website}</p>
      <h2 className="section-title">Address:</h2>
      <p className="address-street">{user.address.street}</p>
      <p className="address-suite">{user.address.suite}</p>
      <p className="address-city">{user.address.city}</p>
      <p className="address-zipcode">{user.address.zipcode}</p>
      <p className="address-geo">Lat: {user.address.geo.lat} Lng: {user.address.geo.lng}</p>
      <h2 className="section-title">Company:</h2>
      <p className="company-name">{user.company.name}</p>
      <p className="company-catchphrase">{user.company.catchPhrase}</p>
      <p className="company-bs">{user.company.bs}</p>
    </div>
    );
}
    export default Info;

