import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import AdoptButton from '../components/Adopt';
import Like from '../components/Like';


const PetDetails = props => { 

    const { id } = props;
    const [pet, setPet] = useState({});
    useEffect( () => {
        axios.get("http://localhost:8000/api/pets/" + id, {withCredentials: true})
            .then( res => { setPet(res.data) })
            .catch( err => { console.log (err); }) 
    }, [])


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
            <div className="details">
                <div className="row">
                    <div className="col-sm-1">

                    </div>
                    <div className="col-sm-5" style={{ backgroundColor: "#dde8fc", opacity: ".8"}}>
                        <br/>
                        <h2 style={{ textAlign: "center"}}> Details about { pet.petName } </h2>{ " " }
                        <br/>
                        <br/>
                        <br/>
                        <h5 style={{ textAlign: "center"}}>Pet Type: { pet.type }</h5>
                        <br/>
                        <h5 style={{ textAlign: "center"}}>Description: { pet.desc }</h5>
                        <br/>
                        <h5 style={{ textAlign: "center"}}> Skills: { pet.sk1 }, { pet.sk2 }, { pet.sk3 }.</h5>
                        <br/>
                        <br/>
                        <br/>
                        <Like/>
                        <br/>
                        <br/>
                        <br/>
                        <AdoptButton id= {pet._id}/>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                    <div className="col-sm-6">

                    </div>
                </div>
            </div>
        </>
    )
}

    
    
export default PetDetails;