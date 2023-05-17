import { Outlet, json, useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const Todos = (props) => {
    const [user, setMyObject] = useState({});

    useEffect(() => {
        const objectData = JSON.parse(localStorage.getItem('myData'));
        setMyObject(objectData);
    }, []);

  const [activeUsers, setActiveUsers] = useState([]);
 

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/todos`)
      .then(response => response.json())
      .then(data => {
        // const activeUsersData = data.filter(user => user.user.id);
         console.log(data);

        setActiveUsers(data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h2>Active Users</h2>
      <ul>
        {activeUsers.map(activeUser => (
          <li key={activeUser.userId}>
            <input
              type="checkbox"
              checked={activeUser.completed}
            />
            <span>{activeUser.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
