import React, { useState } from 'react';
//import './style.css';
import { Outlet } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link, Navigate, useNavigate } from 'react-router-dom';

class Login extends React.Component {

    constructor(props) {
      super(props)
    //   const navigate = useNavigate();
      this.state = {name: '',pass:''};

      this.handleChangePass = this.handleChangePass.bind(this)
      this.handleChangeName = this.handleChangeName.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    // f = () => navigate("/login");


    handleChangeName(event) {
        this.setState({name: event.target.name});
      }
      handleChangePass(event) {
        this.setState({pass: event.target.pass});
      }
    handleSubmit (event) {
        // Prevent page reload
        //event.preventDefault();
        alert('A name was submitted: ' + this.state.name);
        alert('A name was submitted: ' + this.state.pass);
        event.preventDefault();
      }
    

    render() {
      return    ( 
        <div>
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <div className="input-container">
            <label>Username </label>
            <input type="text" value={this.state.name} onChange={this.handleChangeName} />
          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" value={this.state.pass} onChange={this.handleChangePass} />
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
    );}}export default Login;

// const Login = () => {
//     const [g,m]=useState();
//     const navigate = useNavigate();
//     const f = () => navigate("/login");
//     const  handleSubmit = (event) => {
//         console.log("handleSubmit");
//         // Prevent page reload
//         event.preventDefault();
//         var { uname, pass } = document.forms[0];
//         console.log(uname.text);

//       };
//     return <div>
//       <div className="form">
//         <form 
//           onSubmit={handleSubmit}>
//           <div className="input-container">
//             <label>Username </label>
//             <input type="text" name="uname" required />
//             {/* {renderErrorMessage("uname")} */}
//           </div>
//           <div className="input-container">
//             <label>Password </label>
//             <input type="password" name="pass" required />
//             {/* {renderErrorMessage("pass")} */}
//           </div>
//           <div className="button-container">
//             <input type="submit" />
//           </div>
//         </form>
//         <button type="button" onClick={f}>fdgh</button>
  
//       </div>
//       <div>
//         login
//         <Link to="/content">login</Link>
//       </div>
//     </div>
//   };export default Login;