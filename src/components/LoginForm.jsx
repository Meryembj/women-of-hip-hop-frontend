import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { AuthContext } from '../context/auth.context';


function LoginForm({ form, setForm }) {
  const [ errorMessage, setErrorMessage ] = useState(undefined);
  const { storeToken, authenticateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (event, form, setForm, type) => {
    event.preventDefault();
    const body = form;
    axios.post(`https://women-of-hip-hop.herokuapp.com/auth/${type}`, body)
      .then(response => {
        storeToken(response.data.token);
        authenticateUser();
        navigate('/'); 
      })
      .catch((error) => {
        console.log(error);
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <>
      <form>
        <h2>{'Welcome back!'}</h2>
        <label>Username:</label>
        <input type="text" name="username" value={form.username}
               onChange={event => setForm({...form, username: event.target.value})} />
        <label>Password:</label>
        <input type="password" name="password" value={form.password}
               onChange={event => setForm({...form, password: event.target.value})} />
        <button type="submit" className="form-btn"
                onClick={event => handleSubmit(event, form, setForm, 'login')}>
          Log in</button>
      </form>
       { errorMessage && <p className="error-message">{errorMessage}</p> }
    </>
  );
};

export default LoginForm;

