import { useState } from "react";
import { SyntheticEvent } from "react";
import axios from 'axios';
import { Redirect } from "react-router-dom";
import ResetForm from '../components/forms/ResetForm';

type FormData = {
  e: SyntheticEvent,
  password: string,
  passwordConfirm: string
};

const Reset = ({match}: {match: any}) => {

  const [redirect, setRedirect] = useState(false);

  const [notify, setNotify] = useState({
    show: false,
    error: false,
    message: ''
  })

  const submitHandler = async (data: FormData) => {
    data.e.preventDefault();

    const token = match.params.token;

    await axios.post('reset', {
      token,
      password: data.password,
      password_confirm: data.passwordConfirm
    });

    setRedirect(true);
  };

  if(redirect) {
    return <Redirect to="/login" />
  }

  return <ResetForm onRedirect={redirect} onSubmitHandler={submitHandler} />; 
};

export default Reset;
