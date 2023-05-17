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


        fetch(`https://jsonplaceholder.typicode.com/users/7/todos`)
            .then(response => response.json())
            .then(data => {
                // const activeUsersData = data.filter(user => user.user.id);
                console.log(data);
                setActiveUsers(data);
            })
            .catch(error => console.log(error));
    }, [user]);

    const handlerChange = ((id) => {
        console.log(id);
        let newActiveUsers = activeUsers.map(active => (
            (active.id == id) ? { ...active, completed: !active.completed } : active)
        );
        console.log(newActiveUsers);
        setActiveUsers(newActiveUsers)
        //activeUsers.find(activeUser).completed;//=!activeUsers.find(activeUser).completed;
    })

    const handlerChangeSelect = ((event) => {
        let choice = event.target.value;
        let newActiveUsers = activeUsers;
        console.log(choice);
        switch (choice) {
            case 'serial':{
                console.log("serial");
                newActiveUsers=newActiveUsers.sort((a,b)=>a.id<b.id?a.id:b.id);
                console.log(newActiveUsers);
                break;
        }
            case "execution":
                console.log("serial");

                break;
            case "alphabetical":
                console.log("serial");
                console.log(newActiveUsers);
                newActiveUsers.sort(function (a, b) {
                    let x = a.title,
                        y = b.title;
                    return x == y ? 0 : x > y ? 1 : -1;
                
                });
                console.log(newActiveUsers);
                break;

            case "random":
                                console.log("serial");

                break;

       }
        setActiveUsers(newActiveUsers);
        console.log(activeUsers);
    })

    return (
        <div>
                   { console.log(activeUsers)}

            <h2>Active Users</h2>
            <select onChange={handlerChangeSelect}>
                <option value="serial" > serial </option>
                <option value="execution"> execution </option>
                <option value="alphabetical"> alphabetical </option>
                <option value="random"> random </option>
            </select>
            <ul>
                {activeUsers.map(activeUser => (
                    <li key={activeUser.userId}>
                        <input
                            type="checkbox"
                            checked={activeUser.completed}
                            // onChange={() => setActiveUsers(prev=>{...prev,activeUsers.find(activeUser).completed=!activeUsers.find(activeUser).completed})}
                            onChange={() => handlerChange(activeUser.id)}
                        />
                        <span>{activeUser.title}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todos;
