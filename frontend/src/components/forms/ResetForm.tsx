import { useState } from "react";
import { Redirect } from "react-router-dom";

interface Props {
  onRedirect: boolean,
  onSubmitHandler: any;
}

const ResetForm = ({onRedirect, onSubmitHandler} : Props) => {

  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');  

  if(onRedirect) {
    return <Redirect to="/login" />
  }

  return (
    
    <form className="form-signin" onSubmit={e => onSubmitHandler({e, password, passwordConfirm})}>
      <h1 className="h3 mb-3 font-weight-normal">Reset your Password</h1>
      <label htmlFor="inputEmail" className="sr-only mb-3">
        Email address
      </label>
      <input
        type="password"
        className="form-control mb-3"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
        required
      />
      <input
        type="password"
        className="form-control mb-3"
        placeholder="Password Confirm"
        onChange={e => setPasswordConfirm(e.target.value)}
        required
      />      
      <button className="btn btn-lg btn-primary btn-block" type="submit">
        Send Password
      </button>
      <p className="mt-5 mb-3 text-muted">© 2017-2018</p>
    </form>    
  );
};

export default ResetForm;
