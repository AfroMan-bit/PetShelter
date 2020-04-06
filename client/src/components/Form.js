import React, { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';



const Form = props => {

    const { onSubmitHandler, initialPetName, initialType, initialDesc, initialSk1, initialSk2, initialSk3 } = props;
    const [petName, setPetName] = useState(initialPetName);
    const [type, setType] = useState(initialType);
    const [desc, setDesc] = useState(initialDesc);
    const [sk1, setSk1] = useState(initialSk1);
    const [sk2, setSk2] = useState(initialSk2);
    const [sk3, setSk3] = useState(initialSk3);

    
    return (
        <form onSubmit={ e => { onSubmitHandler (e, {petName, type, desc, sk1, sk2, sk3} ) } }>
            <div className="row">
                <div className= "col-sm-2"></div>
                <div className= "col-sm-4">
                    <br/>
                    <br/>
                    <p>
                        <label style={{ color: "white", textAlign: "center"}}>Pet Name:</label><br/>
                        <input style={{ width: "100%" }} type="text" name="petName" value={petName} onChange= { (e) => {setPetName (e.target.value) } }/>
                    </p>
                    <p>
                        <label style={{ color: "white"}}>Pet Type:</label><br/>
                        <input style={{ width: "100%" }} type="text" name="type" value={type} onChange= { (e) => {setType (e.target.value) } }/>
                    </p>
                    <p>
                        <label style={{ color: "white"}}>Pet Description:</label><br/>
                        <input style={{ width: "100%" }} type="text" name="desc" value={desc} onChange= { (e) => {setDesc (e.target.value) } }/>
                    </p>
                        <button style={{ width: "209%" }} type="submit" className="btn btn-primary btn-lg">
                            <span className="glyphicon glyphicon-ok" aria-hidden="true"></span> Submit
                        </button>
                </div>
                <div className= "col-sm-4">
                <br/>
                <br/>
                    <p>
                        <label style={{ color: "white"}}> Skill 1: </label><br/>
                        <input style={{ width: "100%" }} type="text" name="sk1" value={sk1} onChange= { (e) => {setSk1 (e.target.value) } }/>
                    </p>
                    <p>
                        <label style={{ color: "white"}}> Skill 2: </label><br/>
                        <input style={{ width: "100%" }} type="text" name="sk2" value={sk2} onChange= { (e) => {setSk2 (e.target.value) } }/>
                    </p>
                    <p>
                        <label style={{ color: "white"}}> Skill 3: </label><br/>
                        <input style={{ width: "100%" }} type="text" name="sk3" value={sk3} onChange= { (e) => {setSk3 (e.target.value) } }/>
                    </p>
                </div>
            </div>
        </form>        
    )

}

export default Form;

