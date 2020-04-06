import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { navigate } from '@reach/router';


import Form from '../components/Form'


 
const EditPet = props => {

    const [errors, setErrors] = useState([]);

    const { id } = props;
    const [pet, setPet] = useState({});
    const [loaded, setLoaded] = useState(false);
    useEffect( () => {
        axios.get("http://localhost:8000/api/pets/" + id, {withCredentials: true})
            .then( res => { setPet(res.data) 
                            setLoaded(true); })
            .catch( err => {console.log(err) });
    }) 


    const onSubmitHandler = ( e, data ) => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/pets/" + id + "/edit", data, {withCredentials: true})
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
        <>
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
            <div className="editpet">
                <div className="row"> 
                    <div className="col-sm-12">
                        <br/>
                        <h4 className="display-3" style={{ textAlign: "center" }}> Edit { pet.petName }</h4>
                        <br/>
                        {errors.map ( (error, index) => {
                            return (
                                <p style={{ color: "red"}}key={ index }>{error} </p>
                            )
                        })}

                        {/* the {onSubmitHandler} below is referencing the <form onSubmit={ e => { onSubmitHandler (e, {petName, type, description, sk1, sk2, sk3}) } }>  in the Form.js file */}

                        {loaded &&
                            <Form 
                                onSubmitHandler = {onSubmitHandler}
                                initialPetName = { pet.petName }
                                initialType = { pet.type }
                                initialDesc = { pet.desc }
                                initialSk1 = { pet.sk1 }
                                initialSk2 = { pet.sk2 }
                                initialSk3 = { pet.sk3 }
                            />
                        }
                    </div>
                </div>
            </div>       
        </>
    )
}

export default EditPet; 