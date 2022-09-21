import './styles/LandingPage.css';
import { useState } from 'react';

// CONTEXT

// COMPONENTS
import SignupForm from "../components/AuthForms/SignupForm";
import LoginForm from "../components/AuthForms/LoginForm";

function LandingPage(props) {
  const [form, setForm] = useState({
    type: "",
    username: "",
    password: "",
    image: "",
  });

  const [showForm, setShowForm] = useState(false);

  const toggleForm = (formType) => {
    if (!showForm) setShowForm(true);
    setForm({ ...form, type: formType });
  };

  return (
    <div id="LandingPage">
      <section className="firstGlance">
        <div className="title">
          <h1>WOMEN</h1>
          <h1 className="outlined">OF</h1>
          <h1 className="outlined">HIP HOP</h1>
        </div>
        <div className="options">
          <h2>Sign up or log in to proceed.</h2>
          <div className="buttons">
            <button onClick={() => toggleForm("signup")}>Signup</button>
            <button onClick={() => toggleForm("login")}>Login</button>
          </div>
        </div>
      </section>
      <section>
        {showForm && form.type === "signup" && (
          <SignupForm form={form} setForm={setForm} />
        )}
        {showForm && form.type.includes("login") && (
          <LoginForm form={form} setForm={setForm} />
        )}
      </section>
    </div>
  );
}

export default LandingPage;
