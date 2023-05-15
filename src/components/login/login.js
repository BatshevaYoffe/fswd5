import React from 'react';
//import './style.css';
import { Outlet } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link, Navigate, useNavigate } from 'react-router-dom';

// class Login extends React.Component {
//     langueges = ['עברית', 'english', 'emoji', 'Russian']

//     constructor(props) {
//       super(props)
//       const navigate = useNavigate();

//       this.onChangeValue = this.onChangeValue.bind(this)
//     //   this.f=this.f.bind(this)
//   this.handleSubmit=this.handleSubmit.bind(this)
//     }
//     f = () => navigate("/login");


//     onChangeValue(event) {
//     //   console.log(event.target.value);
//     //   this.props.onChange(event.target.value);
//     }
//     handleSubmit = (event) => {
//         // Prevent page reload
//         event.preventDefault();
//         var { uname, pass } = document.forms[0];

//       };

//     render() {
//       return    ( 
//         <div>
//      <div className="form">
//      <form >
//         {/* onSubmit={handleSubmit}> */}
//        <div className="input-container">
//          <label>Username </label>
//          <input type="text" name="uname" required />
//          {/* {renderErrorMessage("uname")} */}
//        </div>
//        <div className="input-container">
//          <label>Password </label>
//          <input type="password" name="pass" required />
//          {/* {renderErrorMessage("pass")} */}
//        </div>
//        <div className="button-container">
//          <input type="submit" />
//        </div>
//        <button type="button" onClick={() => this.f()}>fdgh</button>
//      </form>
//    </div>
//       <div>
//       login
//       <Link to="/content">login</Link>
//     </div>
//     </div>
//     );}
//   }
//   export default Login;

const Login = () => {
    const navigate = useNavigate();
    const f = () => navigate("/login");

return(

    <div>
        <div className="form">
            <form >
                {/* onSubmit={handleSubmit}> */}
                <div className="input-container">
                    <label>Username </label>
                    <input type="text" name="uname" required />
                    {/* {renderErrorMessage("uname")} */}
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" required />
                    {/* {renderErrorMessage("pass")} */}
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
            <button type="button" onClick={f}>fdgh</button>

        </div>
        <div>
            login
            <Link to="/content">login</Link>
        </div>
    </div>
);} 