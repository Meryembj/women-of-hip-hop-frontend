import { useState } from "react";
import axios from 'axios';

function SignupForm({ form, setForm }) {
  const [errorMessage, setErrorMessage] = useState(undefined);

  const resetForm = (form, setForm) => {
    setForm({
      type: '',
      username: '',
      password: '',
      image: ''
    });
  };

  const handleSubmit = (event, form, setForm, type) => {
    event.preventDefault();
    const body = form;
    axios.post(`https://women-of-hip-hop.herokuapp.com/auth/${type}`, body)
      .then(response => {
        console.log('response status', response.status);
        resetForm(form, setForm);
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
            
            <label>Image (as a url):</label>
            <input type="url" name="image" value={form.image}
                   onChange={event => setForm({...form, image: event.target.value})} />
          </div>
          <button type="submit" className="form-btn"
                  onClick={event => handleSubmit(event, form, setForm, 'signup')}>
            Sign me UP!</button>
        </form>
      </>
  );
}

export default SignupForm;
