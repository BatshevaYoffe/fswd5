import { Outlet, json, useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {useParams, Link, Navigate, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const Todos = (props) => {
    // const [user, setMyObject] = useState({});
    const [userTodos, setUserTodos] = useState([]);
    const { id } = useParams();

    // useEffect(() => {
    //     const objectData = JSON.parse(localStorage.getItem('myData'));
    //     setMyObject(objectData);
    // }, []);

    useEffect(() => {
        // if ((user && user.id)) {
            console.log(id);

            const objectData = JSON.parse(localStorage.getItem('myUserTodos'));
            if (objectData) {
                setUserTodos(objectData);
            }
            else {
                fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
                    .then(response => response.json())
                    .then(data => {
                        setUserTodos(data);
                        localStorage.setItem("myUserTodos", JSON.stringify(data));
                    })
                    .catch(error => console.log(error));
            }
        // }
    }, []);

    const handlerChange = ((id) => {
        console.log(id);
        let newUserTodos = userTodos.map(todos => (
            (todos.id == id) ? { ...todos, completed: !todos.completed } : todos)
        );
        localStorage.setItem("myUserTodos", JSON.stringify(newUserTodos));
        setUserTodos(newUserTodos)
    })

    const handlerChangeSelect = ((event) => {
        let choice = event.target.value;
        let newUserTodos = [...userTodos];
        switch (choice) {
            case 'serial':
                newUserTodos = newUserTodos.sort((a, b) => { return a.id - b.id });
                break;
            case "execution":
                const newUsertrue = newUserTodos.filter(todos => todos.completed === true);
                const newUserfalse = newUserTodos.filter(todos => todos.completed === false);
                newUserTodos = newUsertrue.concat(newUserfalse);
                break;
            case "alphabetical":
                newUserTodos = newUserTodos.sort(function (a, b) {
                    let x = a.title, y = b.title;
                    return x == y ? 0 : x > y ? 1 : -1;
                });
                break;
            case "random":
                newUserTodos = newUserTodos.sort(() => Math.random() - 0.5)
                break;
        }
        localStorage.setItem("myUserTodos", JSON.stringify(newUserTodos));
        setUserTodos(newUserTodos);
    })

    return (<div>
            {/* <h2>Active Users {user.name}</h2> */}
            <select onChange={handlerChangeSelect}>
                <option value="serial" > serial </option>
                <option value="execution"> execution </option>
                <option value="alphabetical"> alphabetical </option>
                <option value="random"> random </option>
            </select>
            <ul>
                {userTodos.map(todos => (
                    <li key={todos.userId}>
                        <input
                            type="checkbox"
                            checked={todos.completed}
                            onChange={() => handlerChange(todos.id)}
                        />
                        <span>{todos.title}</span>
                    </li>
                ))}
            </ul>
        </div>
        );
};

export default Todos;
