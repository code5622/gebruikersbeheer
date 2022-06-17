import { useState } from "react";
import { Redirect } from "react-router";
import { NavLink } from "react-router-dom";

interface Props {
  error: boolean,
  onRedirect: boolean,
  onSubmitHandler: any;
}

const Login = ({error, onRedirect, onSubmitHandler}: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let info;

  if(onRedirect) {
    return <Redirect to="/" />
  }

  if(error) {
    info = (
      <div className="alert alert-danger" role="alert">
          Your email and/or password is not correct!
      </div>
    );    
  }

  return (
    <form className="form-signin" onSubmit={(e) => onSubmitHandler({e, email, password})}>
      <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label htmlFor="inputEmail" className="sr-only">
        Email address
      </label>
      {info}
      <input
        type="email"
        id="inputEmail"
        className="form-control mb-3"
        placeholder="Email address"
        onChange={e => setEmail(e.target.value)}
        required
      />
      <label htmlFor="inputPassword" className="sr-only">
        Password
      </label>
      <input
        type="password"
        id="inputPassword"
        className="form-control mb-3"
        onChange={e => setPassword(e.target.value)}
        required
        placeholder="Password"
      />
      <div className="mb-3">
        <NavLink to="/forgot">Forgot Password</NavLink>
      </div>

      <button className="btn btn-lg btn-primary btn-block" type="submit">
        Login
      </button>
    </form>
  );
};

export default Login;
