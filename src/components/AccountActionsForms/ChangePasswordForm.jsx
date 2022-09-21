import '../styles/actionForms.css';
import { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import { AuthContext } from '../../context/auth.context';

const API_URL = 'https://women-of-hip-hop.herokuapp.com/auth/change-password';

function ChangePasswordForm(props) {
  const { user, authenticateUser } = useContext(AuthContext);
  const [ newPassword, setNewPassword ] = useState("");
  const [ message, setMessage ] = useState({text: undefined, type: 'error'});
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    axios.patch(`${API_URL}`, { password: newPassword }, {
      headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` }})
      .then(response => {
        authenticateUser();
        setMessage({text: 'Password successfully modified.', type: 'success'});
      })
      .catch(error => {
        const errorDescription = error.response.data.message;
        setMessage({text: errorDescription, type: 'error'});
      });
  };

  return (
    <form id="changePassword" className="actionForm">
      { message.text &&
        <p className={message.type === 'error' ? 'errorMessage' : 'message'}>
          {message.text}
        </p> }
      <label>New password</label>
      <input type="text" name="newPassword" value={newPassword}
             onChange={event => setNewPassword(event.target.value)} />
      <button onClick={event => handleSubmit(event)}>Submit</button>
    </form>
  );
}

export default ChangePasswordForm;
