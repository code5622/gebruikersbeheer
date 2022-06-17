import { useState } from "react";
import { SyntheticEvent } from "react";
import axios from 'axios';
import ForgotForm from '../components/forms/ForgotForm';

type FormData = {
  e: SyntheticEvent,
  email: string,
};

const Forgot = () => {

  const [token, setToken] = useState('');
  const [notify, setNotify] = useState({
    show: false,
    error: false,
    message: '',
  })

  const submitHandler = async (data: FormData) => {
    data.e.preventDefault();

    try {
      const response = await axios.post('forgot', {email: data.email});
      setNotify({
        show: true,
        error: false,
        message: 'Email was sent',
      })
      setToken(response.data.link)
    } catch(e) {
      setNotify({
        show: true,
        error: true,
        message: 'Email does not exist',
      })
    }

  };

  return <ForgotForm token={token} notify={notify} onSubmitHandler={submitHandler} />;

};

export default Forgot;
