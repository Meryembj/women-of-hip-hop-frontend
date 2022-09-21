import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { AuthContext } from '../../context/auth.context';

const API_URL = 'https://women-of-hip-hop.herokuapp.com/auth/';



function DeleteAccountForm(props) {
  const [ errorMessage, setErrorMessage ] = useState(undefined);
  const { user, logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.delete(`${API_URL}${user._id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` }
    })
      .then(response => {
        logOutUser();
        navigate('/'); 
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };
  return (
    <form id="deleteAccount" className="actionForm">
      <h3><b>ATTENTION:</b> this action will delete your account permanently and log you out.</h3>
      <button onClick={event => handleSubmit(event)}>Delete my account</button>
    </form>
  );
}

export default DeleteAccountForm;
