import React, { useState, useEffect } from 'react';
//import './style.css';
import { Outlet, json } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const Info = (props) => {
    const [user, setMyObject] = useState({});

    useEffect(() => {
        const objectData = JSON.parse(localStorage.getItem('myData'));
        setMyObject(objectData);
    }, []);

    return(
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{user.username}</Card.Subtitle>
            <Card.Text>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
              <p>Website: {user.website}</p>
            </Card.Text>
            <Card.Title>Address:</Card.Title>
            {/* <ListGroup className="list-group-flush">
              <ListGroupItem>{user.address.street}, {user.address.suite}</ListGroupItem>
              <ListGroupItem>{user.address.city}, {user.address.zipcode}</ListGroupItem>
              <ListGroupItem>Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}</ListGroupItem>
            </ListGroup> */}
            <Card.Title>Company:</Card.Title>
            <Card.Text>
              {/* <p>{user.company.name}</p>
              <p>{user.company.catchPhrase}</p>
              <p>{user.company.bs}</p> */}
            </Card.Text>
          </Card.Body>
        </Card>
    );
}
export default Info;

