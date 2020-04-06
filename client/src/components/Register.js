import React, { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { navigate } from '@reach/router';
import axios from 'axios';

const Register = props => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});


    const register = e => {
        e.preventDefault();
        const user = { firstName, lastName, email, password, confirmPassword };
        axios.post("http://localhost:8000/api/register", user, {withCredentials: true})
            .then( res => { console.log(res); 
                            if(res.data.loggedIn) 
                            { navigate("/");
                            } else {
                                setErrors(res.data.errors);
                            } })
            .catch( err => console.log(err) );
    }
  

    return (
        
        <>
            <form onSubmit={ register }>
                <label >First Name</label> {" "}
                <input style={{ width: "100%" }} type="text" name="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} /><br/>
                {
                    errors.firstName ?
                    <p style={{ color: "red"}}>{errors.firstName.message}</p>: ""
                }
                <label>Last Name</label> {" "}
                <input style={{ width: "100%" }} type="text" name="lastName" value={lastName} onChange={e => setLastName(e.target.value)} /><br/>
                {
                    errors.lastName ?
                    <p style={{ color: "red"}}>{errors.lastName.message}</p>: ""
                }
                <label>Email</label> {" "}
                <input style={{ width: "100%" }} type="text" name="email" value={email} onChange={e => setEmail(e.target.value)} /><br/>
                {
                    errors.email ?
                    <p style={{ color: "red"}}>{errors.email.message}</p>: ""
                }
                <label>Password</label> {" "}
                <input style={{ width: "100%" }} type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} /><br/>
                {
                    errors.password ?
                    <p style={{ color: "red"}}>{errors.password.message}</p>: ""
                }
                <label>Confirm Password</label> {" "}
                <input style={{ width: "100%" }} type="password" name="confirmPassword" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} /><br/>
                {
                    errors.confirmPassword ?
                    <p style={{ color: "red"}}>{errors.confirmPassword.message}</p>: ""
                }
                <br/>
                <button type="submit" className="btn btn-success btn-lg">
                    <span className="glyphicon glyphicon-ok" aria-hidden="true"></span> Register
                </button>
            </form>
        </>
    );


}

export default Register;