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
    //    axios.post(`http://localhost:5005/auth/${type}`, body)  <-- THIS WORKS
      .then(response => {
        console.log('response status', response.status);
        resetForm(form, setForm);
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        console.log('help?', errorDescription);
        setErrorMessage(errorDescription);
        console.log(error);
      });
  };

  return (
      <>
        <form>
          <h2>{'Create an account.'}</h2>
          <label>Username:</label>
          <input type="text" name="username" value={form.username}
                 onChange={event => setForm({...form, username: event.target.value})} />
          <label>Password:</label>
          <input type="password" name="password" value={form.password}
                 onChange={event => setForm({...form, password: event.target.value})} />
          <label>Image (as a url):</label>
          <input type="url" name="image" value={form.image}
                 onChange={event => setForm({...form, image: event.target.value})} />
          <button type="submit" className="form-btn"
                  onClick={event => handleSubmit(event, form, setForm, 'signup')}>
            Sign me UP!</button>
        </form>
        {/* { errorMessage && <p className="error-message">{errorMessage}</p> } */}
        <p className="error-message">!!!! {errorMessage}</p>
      </>
  );
}

export default SignupForm;
