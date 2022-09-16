import './style/LandingPage.css';
import { useState, useContext } from 'react';

// CONTEXT
import { AuthContext } from '../context/auth.context';

// COMPONENTS
import Navbar from '../components/Navbar';
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
    <div className='LandingPage'>
      <section className='firstGlance'>
        <div className='title'>
          <h1>WOMEN</h1>
          <h1 className='outlined'>OF</h1>
          <h1 className='outlined'>HIP HOP</h1>
        </div>
        <div className="options">
          <h2>Sign up or log in to proceed.</h2>
          <div className="buttons">
            <button onClick={() => toggleForm('signup')}>Signup</button>
            <button onClick={() => toggleForm('login')}>Login</button>
          </div>
        </div>
      </section>
      <section>
        {showForm && form.type === 'signup' && <SignupForm form={form} setForm={setForm}/>}
        {showForm && form.type.includes('login') && <LoginForm form={form} setForm={setForm}/>}
      </section>
    </div>
  );
}

export default LandingPage;

