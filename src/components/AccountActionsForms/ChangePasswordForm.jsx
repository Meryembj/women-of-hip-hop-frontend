import './actionForms.css';
import axios from 'axios';
import { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";

import { AuthContext } from '../../context/auth.context';

const API_URL = 'https://women-of-hip-hop.herokuapp.com/auth/change-password';

function ChangePasswordForm(props) {
  const { user, authenticateUser } = useContext(AuthContext);
  const [ newPassword, setNewPassword ] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    axios.patch(`${API_URL}`, { password: newPassword }, {
      headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` }})
      .then(response => {
        console.log(response);
        authenticateUser();
        navigate('/profile');         
      });
  };

  return (
    <form id="changePassword" className="actionForm">
      <label>New password</label>
      <input type="text" name="newPassword" value={newPassword}
             onChange={event => setNewPassword(event.target.value)} />
      <button onClick={event => handleSubmit(event)}>Submit</button>
    </form>
  );
}

export default ChangePasswordForm;
