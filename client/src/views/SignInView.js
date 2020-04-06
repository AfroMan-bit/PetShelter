import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Register from '../components/Register';
import Login from '../components/Login';




const LogandReg = props => {
    return (
        <div className="signin">
            <div className="row" >
                <div className="col-sm-4">
                    <h4 className="display-4" style={{ textAlign: "center"}}> You are welcome to Register!</h4>
                    <br/>
                    <Register/>
                </div>
                <div className="col-sm-4">

                </div>
                <div className="col-sm-4">
                    <h4 className="display-4" style={{ textAlign: "center"}}> Already a member? Sign In!</h4>
                    <br/>
                    <Login/>
                </div>
            </div>
        </div>
    );
}

export default LogandReg; 

