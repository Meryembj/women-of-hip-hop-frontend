import { useState } from "react";
import axios from 'axios';

const API_URL = 'https://women-of-hip-hop.herokuapp.com/auth/';

function SignupForm({ form, setForm }) {
  const [errorMessage, setErrorMessage] = useState(undefined);

  const handleSubmit = (event, form, setForm) => {
    event.preventDefault();
    axios.post(`${API_URL}signup`, form)
      .then(response => {
        console.log('response status', response.status);
        setForm({...form, type: 'login-post-signup'});
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
      <>
        <form id='signup'>
          <h2>{'Create an account.'}</h2>
        { errorMessage && <p className="errorMessage">{errorMessage}</p> }
          <div className="inputField">
            <label>Username</label>
            <input type="text" name="username" value={form.username}
                   onChange={event => setForm({...form, username: event.target.value})} />
          </div>
          <div className="inputField">
            <label>Password</label>
            <input type="password" name="password" value={form.password}
                   onChange={event => setForm({...form, password: event.target.value})} />
          </div>
          <div className="inputField">
            
            <label>Picture (as a url)</label>
            <input type="url" name="picture" value={form.picture}
                   onChange={event => setForm({...form, picture: event.target.value})} />
          </div>
          <button type="submit" className="form-btn"
                  onClick={event => handleSubmit(event, form, setForm, 'signup')}>
            Sign me UP!</button>
        </form>
      </>
  );
}

export default SignupForm;
