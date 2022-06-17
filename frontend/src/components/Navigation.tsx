import { NavLink } from "react-router-dom";
import axios from 'axios';

const Navigation = ({user, setLogin, setUser, permission }: {user:any, setLogin: Function, setUser: Function, permission: boolean}) => {
  
  const logoutHandler = async () => {
    await axios.post('logout', {});
    setLogin(false);
    setUser(null);
  };

  let links = (
    <ul className="navbar-nav my-2 my-lg-0">
    <li className="nav-item">
      <NavLink className="nav-link" to="/login">
        Login
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/register">
        Register
      </NavLink>
    </li>
  </ul>
  );

  if(user) {
    links = (         
      <NavLink className="nav-link" to="/" onClick={logoutHandler}>
        Logout
      </NavLink>
    );
  } 

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink to="/">Home</NavLink>
          {permission && <NavLink to="/finance">Finance</NavLink>}   
          <NavLink to="/authorization">Authorization</NavLink>                   
        </li>
      </ul>
      {links}
    </nav>
  );
};

export default Navigation;
