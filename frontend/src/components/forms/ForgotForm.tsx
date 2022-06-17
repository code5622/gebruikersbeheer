import { useState } from "react";
import { NavLink } from 'react-router-dom';

interface Props {
  onSubmitHandler: any;
  notify: any,
  token: string
}

const ForgotForm = ({onSubmitHandler, notify, token}: Props) => {

    const [email, setEmail] = useState('');
    let info;
  
    if(notify.show) {
      info = (
        <div className={notify.error ? 'alert alert-danger' : 'alert alert-success'} role="alert">
            {notify.message}
            <br></br>
            <NavLink to={"resetpassword/" + token}>Reset Your password</NavLink>
        </div>
      );
    }
  
    return (    
      <form className="form-signin" onSubmit={e => onSubmitHandler({e, email})}>
        {info}
        <h1 className="h3 mb-3 font-weight-normal">Please set your email</h1>
        <label htmlFor="inputEmail" className="sr-only mb-3">
          Email address
        </label>
        <input
          type="email"
          id="inputEmail"
          className="form-control mb-3"
          placeholder="Email address"
          onChange={e => setEmail(e.target.value)}
          required
        />
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Send Email
        </button>
        <p className="mt-5 mb-3 text-muted">© 2017-2018</p>
      </form>    
    );
};

export default ForgotForm;
