//import React, {useState} from "react";
//import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
// import Accueil from './pages/Accueil';
// import Users from './pages/Users';
// import About from './pages/About';
// import Profile from './pages/Profile';
// import ErreurPage from './pages/ErreurPage';
// import Navigation from './pages/Navigation'

import React from "react";
import Person from "./Person";
import './App.css';

class App extends React.Component {
 
  constructor(props){
    super(props);
    this.state = {
      name: 'Badrane',
      profession: 'Developpeur React',
    }
  }

  handleSelectProf = (e) =>{
    this.setState({
      profession : e.target.value
    })
  }

  handleSelectName = (e) =>{
    this.setState({
      name : e.target.value
    })
  }

  render(){
    return (<div className="main">
             <p>les valeurs des champs Select sont liées à des états (state)</p>
             <div className="select">

                <select name="nom" value={this.state.name} onChange={this.handleSelectName}>
                  <option value="Badrane" >Badrane</option>
                  <option value="Stephane">Stephane</option>
                  <option value="David">David</option>
                </select>

                <select name="prof" value={this.state.profession} onChange={this.handleSelectProf}>
                  <option value="Developpeur React">Developpeur React</option>
                  <option value="Developpeur Nodejs">Developpeur Nodejs</option>
                  <option value="Developpeur FullStack">Developpeur FullStack</option>
                </select>
                
             </div>
              
             <p>les états sont affectés aux props du composant enfant</p>
              <Person name={this.state.name} profession={this.state.profession} />
           </div>)
  }
  // return (

  //     <BrowserRouter>
  //         {/* Link et Route doivent etre dans BrowserRouter */}
  //         <div>
  //           {/* <Link to="/">Home</Link>
  //           <Link to="/users">Users</Link>
  //           <Link to="/about">About</Link> */} 
  //           <Navigation />

  //           <Switch>
  //             <Route path="/" exact component={Accueil} /> {/* exact={true}  */}
  //             <Route path="/users" exact component={Users} /> 

  //             <Route path="/users/:profileId"   component={Profile} /> 
              
  //             <Route path="/about" exact component={About} />
  //             <Route  component={ErreurPage} /> {/* path="*" */}
  //           </Switch>
  //         </div>
  //     </BrowserRouter> 

  // );
  
  
}

export default App;