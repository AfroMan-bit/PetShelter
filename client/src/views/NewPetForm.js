import React, {useState} from 'react'
import axios from 'axios';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { navigate } from '@reach/router';


import Form from '../components/Form'



const NewPet = props => {

    const [errors, setErrors] = useState([]);

    const onSubmitHandler = ( e, data ) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/pets/new", data, {withCredentials: true})
            .then ( res => { navigate ("/pets"); })
            .catch ( err => { 
                console.log(err);
                const errorResponse = err.response.data.errors;
                const errorArr = [];

                for(const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message);
                }
                setErrors(errorArr);
            })
    }



    return (
        <div className="form">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Log Out<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/pets">Back to Pet Shelter</a>
                    </li>
                </ul>
            </nav>
            <div className="row">
                <div className="col-sm-12">
                    <br/>
                        <h4 className="display-3"style={{ textAlign: "center", color: "white"}}> Do you know a pet needing a home?</h4>
                    <br/>
                
                    {errors.map ( (error, index) => {
                        return (
                            <p style={{color: "red"}} key={ index }>{error} </p>
                        )
                    })}

                    {/* the {onSubmitHandler} below is referencing the <form onSubmit={ e => { onSubmitHandler (e, {petName, type, description, sk1, sk2, sk3}) } }>  in the Form.js file */}
                    <Form onSubmitHandler = {onSubmitHandler}
                        //in the code below any thing can be added inside "" as a form of a placeholer to give users a better understanding of what better info to give
                        initialPetName = ""
                        initialType = ""
                        initialDesc = ""
                        initialSk1 = ""
                        initialSk2 = ""
                        initialSk3 = "" 
                    />
                </div>
            </div>
        </div>
        
    )

}

export default NewPet;

