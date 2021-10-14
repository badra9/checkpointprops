import React from "react";
//import axios from 'axios';
import './App.css';
//import data from './pages/data.js';
import ViewUser from './pages/ViewUser'
import {getUsers,deleteUsers} from './api/Users'

class App extends React.Component{
 
  constructor(props){
    super(props);
    this.state = {
      users: [],
      user: {}
    }
  }
  componentDidMount =  () =>{
     getUsers().then(response => {
       this.setState({
         users: response.data
       })
     }).catch(erreur => alert(`Erreur s'est produite`));
  }

//   componentDidMount =  () =>{
//       this.setState({
//         users: data
//       })
//  }
setActive = (utilisateur) =>{
  this.setState({user: utilisateur})
}
deleteUser = (utilisateur) =>{
      // delete from state
  // let intermediaire = this.state.users;
  // intermediaire = intermediaire.filter(elt => elt.id != utilisateur.id );
  // this.setState({users: intermediaire});

  // ou encore
  // let intermediaire = this.state.users;
  // let index = intermediaire.indexOf(utilisateur);
  // intermediaire.splice(index, 1);
  // this.setState({users: intermediaire});

      // delete from server (axios)
  deleteUsers(utilisateur.id)
    .then(()=>{
      let intermediaire = this.state.users;
      let index = intermediaire.indexOf(utilisateur);
      intermediaire.splice(index, 1);
      this.setState({users: intermediaire});
  }).catch(erreur => alert(`Erreur s'est produite`));
    
}
  render(){
    return (
            <div>
              <ul>
                {this.state.users.map(user => 
                  <li key={user.id}>
                    {user.name} {' '}
                    <button onClick={()=> this.setActive(user)}>View</button>
                    <button onClick={()=> this.deleteUser(user)}>Delete</button>
                  </li>
                )}
              </ul>
              <h3>User Details</h3>
              {this.state.user.id > 0 ? 
                  <ViewUser name={this.state.user.name} email={this.state.user.email} />
              :  ('Please select a user')}
            </div>
    )  
  }
    
}

export default App;