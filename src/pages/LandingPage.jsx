import './LandingPage.css';
import { useState, useContext } from 'react';

// CONTEXT
import { AuthContext } from '../context/auth.context';

// COMPONENTS
import SignupForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';

function LandingPage(props) {
  const { user } = useContext(AuthContext);
  
  const [ form, setForm ] = useState({
    type: '',
    username: '',
    password: '',
    image: ''
  });

  const [showForm, setShowForm ] = useState(false);

  const toggleForm = formType => {
    if (!showForm)
      setShowForm(true);
    setForm({...form, type: formType});
  };

  return (
    <>
      <h1>WOMEN OF HIP HOP</h1>
      <h2>Sign up or log in to proceed.</h2>
      <button onClick={() => toggleForm('signup')}>Signup</button>
      <button onClick={() => toggleForm('login')}>Login</button>
      {showForm && form.type === 'signup' && <SignupForm form={form} setForm={setForm}/>}
      {showForm && form.type === 'login' && <LoginForm form={form} setForm={setForm}/>}
    </>
  );
}

export default LandingPage;

