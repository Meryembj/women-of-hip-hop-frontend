import axios from 'axios';

function LoginForm({ form, setForm }) {
  const resetForm = (form, setForm) => {
    setForm({
      type: '',
      username: '',
      password: '',
      picture: ''
    });
  };

  const handleSubmit = (event, form, setForm, type) => {
    event.preventDefault();
    const body = form;
    axios.post(`https://women-of-hip-hop.herokuapp.com/auth/${type}`, body)
    //    axios.post(`http://localhost:5005/auth/${type}`, body)
      .then(response => {
        console.log('response status', response.status);
        resetForm(form, setForm);
      })
      .catch((error) => {
        resetForm(form, setForm);
        console.log(error);
      });
  };

  return (
    <form>
      <h2>{'Welcome back!'}</h2>
      <label>Username:</label>
      <input type="text" name="username" value={form.username}
             onChange={event => setForm({...form, username: event.target.value})} />
      <label>Password:</label>
      <input type="password" name="password" value={form.password}
             onChange={event => setForm({...form, password: event.target.value})} />
      <input type="submit" className="form-btn" value="Log in" onSubmit={event => handleSubmit(event, form, setForm, 'login')}/>
    </form>
  );
};

export default LoginForm;

