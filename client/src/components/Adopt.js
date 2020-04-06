import React, { useState } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { navigate } from '@reach/router';



const AdoptButton = props => {

    const { id } = props;
    const [pet, setPet] = useState({});
    
    const onClickHandler = e => {
        axios.delete("http://localhost:8000/api/pets/" + id, {withCredentials: true})
            .then(res => { console.log(res); navigate("/pets"); })
            .catch( err => { console.log(err); })
    }

 
    return(
        <>
            <button onClick={onClickHandler } style={{ width: "100%", padding: "10px" }} type="submit" className="btn btn-danger btn-lg">Adopt Pet?</button>
        </>
    )
}
export default AdoptButton;