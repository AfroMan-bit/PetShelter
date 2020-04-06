import React from 'react';

import { Router} from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';



// Import not needed anymore in order to customize each views navigation bar
// import Nav from './components/Nav';

import NewPet from './views/NewPetForm';
import Home from './views/NewPetList';
import PetDetails from './views/Details';
import EditPet from './views/Edit';
import LogandReg from './views/SignInView';



function App() {

  return (
    <>
      <div style={{ backgroundColor: "#d0d0d0"}}className="container">
        <div style={{ opacity: "80%"}}className="jumbotron">
          <h1 className="display-2" style={{ textAlign: "center", color: "white"}}>Pet Shelter</h1>
        </div>
        {/* <Nav/> // not needed anymore in order to customize each views navigation bar */}
        <Router>
          <LogandReg path="/" />
          <Home path="/pets" />
          <NewPet path="/pets/new" />
          <PetDetails path="/pets/:id" />
          <EditPet path="/pets/:id/edit" />
        </Router>
      </div>
    </>
  );
}

export default App;

// MAKE SURE YOU INSTALL THE FOLLOWING PACKAGES npm install
// @reach/router
// bootstrap  OR
// bulma OR 
// materialize 


