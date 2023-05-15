import React, { useState } from 'react';
//import './style.css';
import { Outlet } from 'react-router-dom';
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
        const name = event.target.username;
        setInputs(prev => {
            return { prev, name: name }
        });
        //inputs => ({name:name,password:value}));
    }
    const handleChangePass = (event) => {
        const value = event.target.password;
        alert(value)
        setInputs(prev => {
            return { prev, password: value }
        });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs.name);


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