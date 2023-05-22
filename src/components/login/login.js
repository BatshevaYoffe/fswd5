import React, { useState } from 'react';
//import './style.css';
import { Outlet, json } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Login = () => {
    const [inputsN, setName] = useState({name: ""});
    const [inputsP, setPass] = useState({password: ""});
    const navigate = useNavigate();

    const handleChangeName = (event) => {
        const name = event.target.value;
        setName({name:name});
    }

    const handleChangePass = (event) => {
        const value = event.target.value;
        setPass({password:value});
    }

    const handleSubmit = (event) => {
        console.log(inputsP.password);
        console.log(inputsN.name);
    
        event.preventDefault();
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(json => {
                for (let i in json) {
                    const pass = g(json[i].address.geo.lat);
                    if (json[i].username === inputsN.name && pass === inputsP.password) {
                        localStorage.setItem("myData", JSON.stringify(json[i]));
                        console.log(json[i].id);
                        navigate(`/content/user/${json[i].id}`);
                        break;
                    }
                }
            }
        )
    }

    const g = (num) => {
        let str = num.toString(); // ממיר את המספר למחרוזת
        let decimalIndex = str.indexOf('.'); // מוצא את המיקום של הנקודה במחרוזת
        let decimalPart = str.substring(decimalIndex + 1); // מחזיר את החלק העשרוני של המספר
        return decimalPart;
    }

    return (
    <div>
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Username </label>
                    <input type="text" name="name" value={inputsN.name} onChange={handleChangeName} />
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="password" value={inputsP.password} onChange={handleChangePass} />
                </div>
                <div className="button-container">
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    </div>
    )
}; 
export default Login;