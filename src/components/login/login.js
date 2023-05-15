import React, { useState } from 'react';
//import './style.css';
import { Outlet, json } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link, Navigate, useNavigate } from 'react-router-dom';
// const [inputs, setInputs] = useState({});

// class Login extends React.Component {

//     constructor(props) {
//       super(props)
//     //   const navigate = useNavigate();
//     //   const [name, setName] = useState("");
//       this.state = {name: '',pass:''};

//       this.handleChangePass = this.handleChangePass.bind(this)
//       this.handleChangeName = this.handleChangeName.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
//     // f = () => navigate("/login");


// handleChangeName(event) {
//     this.setState({name: event.target.name});
//   }
//   handleChangePass(event) {
//     this.setState({pass: event.target.pass});
//   }
// handleSubmit (event) {
//     // Prevent page reload
//     //event.preventDefault();
//     alert('A name was submitted: ' + this.state.name);
//     alert('A name was submitted: ' + this.state.pass);
//     event.preventDefault();
//   }


//     render() {
//       return    ( 
//         <div>
//       <div className="form">
//         <form onSubmit={this.handleSubmit}>
//           <div className="input-container">
//             <label>Username </label>
//             <input type="text" name='usname' value={inputs.usname} onChange={this.handleChangeName}  />
//           </div>
//           <div className="input-container">
//             <label>Password </label>
//             <input type="password" value={this.state.pass} onChange={this.handleChangePass} />
//           </div>
//           <div className="button-container">
//             <input type="submit" value="Submit" />
//           </div>
//         </form>  
//       </div>
//       <div>
//         login
//         <Link to="/content">login</Link>
//       </div>
//     </div>
//     );}}export default Login;

const Login = () => {
    const [inputs, setInputs] = useState({
        name: "",
        password: "",
    });
    // const [inputs, setInputs] = useState({});
    const navigate = useNavigate();
    const f = () => navigate("/login");
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
        alert(inputs.password);
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(json => {
                for (let i in json) {
                    console.log(json[i].username)
                    if (json[i].username == inputs.name) {
                        console.log((json[i].address.geo.lat))
                        let num = g(json[i].address.geo.lat)
                        if (num == inputs.password) {
                            break;
                        }

                    }
                }}
                )
    }
    const g = (num) => {
        console.log("gooooooooooood");

        let str = num.toString(); // ממיר את המספר למחרוזת
        let decimalIndex = str.indexOf('.'); // מוצא את המיקום של הנקודה במחרוזת
        let decimalPart = str.substring(decimalIndex + 1); // מחזיר את החלק העשרוני של המספר
        console.log(decimalPart); // יחזיר 3159
        return decimalPart;

    }
    const A = (props) => {
        const navigate = useNavigate();

        const f = () => navigate("/content");
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(json => console.log(json.albumId))
        return <div>A <button type="button" onClick={f}>fdgh</button> </div>;
    };

    //       <script>
    //       fetch('https://jsonplaceholder.typicode.com/photos')
    //         .then(response => response.json())
    //         .then(json =>console.log(json.albumId))
    //   </script>
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