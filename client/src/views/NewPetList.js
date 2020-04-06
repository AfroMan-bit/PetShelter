import React, { useEffect, useState } from 'react'
import '../App.css';
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';



const Home = props => {

    const [pets, setPets] = useState([]);
    useEffect( () => {
        axios.get("http://localhost:8000/api/pets", {withCredentials: true})
            .then( (res) => { setPets(res.data); })
            .catch(err => { if(!err.response.data.verified) 
                            { navigate("/");
                        } else {
                            console.log(err);
                        }
            });
    }, []) 

    return (
        <div className="list">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Log Out<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/pets/new">Add pet to Shelter?</a>
                    </li>
                </ul>
            </nav>
            <div className="row">
                <div className="col-sm-6">
                    <h4 className="display-4"style={{ textAlign: "center"}}> Welcome!</h4>
                    <h4 style={{ textAlign: "center"}}> These pets are looking for a good home.</h4>
                    <br/>
                    <table className="table table-striped">
                        <tbody>
                            <tr style={{ textAlign: "center"}}>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Actions</th>
                            </tr>
                            {
                                pets.map( (pet, index) => {
                                    return (
                                        <tr key= { index }>
                                            <td style={{ textAlign: "center"}}> { pet.petName } </td>
                                            <td style={{ textAlign: "center"}}> { pet.type } </td>
                                            <td style={{ textAlign: "center"}}> 
                                                <Link to= {pet._id} > Details{" "}</Link> |
                                                <Link to= {pet._id + "/edit" } >{" "}Edit{" "}</Link>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>  
            </div>
        </div>
    )
}
export default Home;
