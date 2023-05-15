import React, { useState } from 'react';
//import './style.css';
import { Outlet, json } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Login = () => {
    const [inputs, setInputs] = useState({
        name: "",
        password: "",
    });
    // const [inputs, setInputs] = useState({});
    const navigate = useNavigate();

    const handleChangeName = (event) => {
        const name = event.target.value;
        setInputs({ name: name });
    }

    const handleChangePass = (event) => {
        const value = event.target.value;
        setInputs({ password: value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(json => {
                for (let i in json) { 
                    console.log(json);
                    const pass =  g(json[i].address.geo.lat);
                    console.log(pass);
                    console.log(json[i].username);
                    console.log(json[i].username == inputs.name);
                    console.log(g(json[i].address.geo.lat) == inputs.password);
                    if (json[i].username === inputs.name && g(json[i].address.geo.lat) === inputs.password) { 
                        // <Link to="/content"></Link>
                        console.log('handleSubmit');

                        navigate('/content');
                    }
                }

            }

            )
    }
    const g = (num) => {
        // console.log("gooooooooooood");

        let str = num.toString(); // ממיר את המספר למחרוזת
        let decimalIndex = str.indexOf('.'); // מוצא את המיקום של הנקודה במחרוזת
        let decimalPart = str.substring(decimalIndex + 1); // מחזיר את החלק העשרוני של המספר
        // console.log(decimalPart); // יחזיר 3159
        return decimalPart;

    }

    return <div>
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Username </label>
                    <input type="text" name="username" value={inputs.name} onChange={handleChangeName} />
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="password" value={inputs.password} onChange={handleChangePass} />
                </div>
                <div className="button-container">
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
        <div>
            login
            <Link to="/content">login</Link>
        </div>
    </div>
}; export default Login;