import React, { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import { navigate } from '@reach/router';
import axios from 'axios';


const Login = props => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");


    const login = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/login", {email, password}, {withCredentials: true})
            .then( res => { console.log(res); 
                            if(res.data.loggedIn) 
                            { navigate("/pets");
                            } else {
                                setErrorMessage("Invalid Login Attempt!");
                            } })
            .catch( err => console.log(err) );
    }

    return (
        <>
            <form onSubmit={login }>
                <label style={{ color: "white"}}>Email</label>
                <input style={{ width: "100%" }} type="text" name="email" value={email} onChange={e => setEmail(e.target.value)} /><br/>
                <label style={{ color: "white"}}>Password</label>
                <input style={{ width: "100%" }} type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} /><br/>
                <br/>
                {
                    errorMessage.length > 0 ?
                    <h6 style={{ color: "red"}}>{errorMessage}</h6>: ""
                }
                <button type="submit" className="btn btn-primary btn-lg">
                    <span className="glyphicon glyphicon-ok" aria-hidden="true"></span> Sign In
                </button>
            </form>
        </>
    );
}

export default Login;

        