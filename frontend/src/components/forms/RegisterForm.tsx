import { useState } from "react";
import { Redirect } from "react-router-dom";

interface Props {
  onRedirect: boolean,
  onSubmitHandler: any
}

const RegisterForm = ({onRedirect, onSubmitHandler} : Props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  if (onRedirect) {
    return <Redirect to="/login" />;
  }

  return (
    <form className="form-signin" onSubmit={e => onSubmitHandler({e, firstName, lastName, email, password, passwordConfirm})}>
      <h1 className="h3 mb-3 font-weight-normal">Please Register</h1>
      <label htmlFor="inputEmail" className="sr-only">
        First Name
      </label>
      <input
        type="text"
        id="inputEmail"
        className="form-control mb-3"
        placeholder="First Name"
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <label htmlFor="inputEmail" className="sr-only">
        Last Name
      </label>
      <input
        type="text"
        id="inputEmail"
        className="form-control mb-3"
        placeholder="Last Name"
        onChange={(e) => setLastName(e.target.value)}
        required
      />
      <label htmlFor="inputEmail" className="sr-only">
        Last Name
      </label>
      <input
        type="email"
        id="inputEmail"
        className="form-control mb-3"
        placeholder="Email address"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label htmlFor="inputPassword" className="sr-only">
        Password
      </label>
      <input
        type="password"
        id="inputPassword"
        className="form-control mb-3"
        onChange={(e) => setPassword(e.target.value)}
        required
        placeholder="Password"
      />
      <label htmlFor="inputPassword" className="sr-only">
        Password Confirm
      </label>
      <input
        type="password"
        id="inputPassword"
        className="form-control mb-3"
        onChange={(e) => setPasswordConfirm(e.target.value)}
        required
        placeholder="Password Confirm"
      />
      <button className="btn btn-lg btn-primary btn-block" type="submit">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
