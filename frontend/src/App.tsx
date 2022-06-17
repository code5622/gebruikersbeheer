import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import axios from 'axios';
import "./App.css";
import Login from "./containers/Login";
import Home from "./containers/Home";
import Register from "./containers/Register";
import Forgot from "./containers/Forgot";
import Reset from "./containers/Reset";
import Navigation from "./components/Navigation";
import Users from './containers/Users';
import Roles from './containers/Roles';
import Calories from './containers/Calories';
import Authorization from './containers/Authorization';
import IUser from './interfaces/IUser';
import MenuAppbar from './containers/MenuAppbar';


axios.defaults.baseURL = 'http://localhost:8000/api/';
axios.defaults.withCredentials = true;

const App = () => {
  const [user, setUser] = useState<IUser|null>(null);
  const [permission, setPermission] = useState(false);
  const [login, setLogin] = useState(false);


  const fetchUserRole = async (userId: number, roleId: number): Promise<void> => {
    console.log('hallo');    
    try {
      const response = await axios.get(`user_role/${userId}/${roleId}`);
      console.log(response.data);   
      if(response.data >= 1) {
          
        setPermission(true); 
      }  
    } catch(error) {
      console.log(error);
    }
  };    

  useEffect( () => {
    (
      async () => {
        try {
          const response = await axios.get('user');
          const user = response.data;
          setUser(user);
        } catch(e) {
          setUser(null);
        }
      }
    )();
  }, [login]);

  useEffect(() => {

    if(user){ 
      fetchUserRole(user.id, 1);
    }
  }, [user])

  return (
    <div className="App">
      <BrowserRouter>
        {/*<Navigation user={user} setUser={setUser} permission={permission} setLogin={setLogin} />*/}
        <MenuAppbar />
        <Route path="/" exact component={() => <Home user={user} />} />
        <Route path="/login" component={() => <Login setLogin={setLogin} />} />
        <Route path="/register" component={Register} />
        <Route path="/forgot" component={Forgot} />       
        <Route path="/resetpassword/:token" component={Reset} />    

        <Route path="/authorization" component={Authorization}/> 
        <Route path="/users" component={Users}/>    
        <Route path="/roles" component={Roles}/> 
        <Route path="/permissions" component={Calories}/> 
        

        <Route path="/finance" render={() => !permission ? <Redirect to="/users"/> : <div>Finance</div> }/>         
      </BrowserRouter>
    </div>
  );
}

export default App;
