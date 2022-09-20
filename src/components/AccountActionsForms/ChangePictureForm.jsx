import './actionForms.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useState, useContext } from 'react';

import { AuthContext } from '../../context/auth.context';

const API_URL = 'https://women-of-hip-hop.herokuapp.com/auth/change-picture';

function ChangePictureForm(props) {
  const { user, authenticateUser } = useContext(AuthContext);
  const [ newPicture, setNewPicture ] = useState(user.picture);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    axios.patch(`${API_URL}`, {picture: newPicture}, {
      headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` }})
      .then(response => {
        console.log(response);
        authenticateUser();
        navigate('/profile');         
      });
  };

  return (
    <form id="ChangePicture" className="actionForm">
      <label>New picture's URL</label>
      <input type='url' name='newPicture' value={newPicture}
             onChange={event => setNewPicture(event.target.value)}/>
      <label>Preview:</label>
      <img alt="preview" src={newPicture === '' ? 'https://i.imgflip.com/3es772.png' : newPicture}/>
      {newPicture === '' && <h3 className='previewText'>Waiting for your input...</h3>}
      <button type="submit" onClick={event => handleSubmit(event)}>Submit</button>
    </form>
  );
}

export default ChangePictureForm;
