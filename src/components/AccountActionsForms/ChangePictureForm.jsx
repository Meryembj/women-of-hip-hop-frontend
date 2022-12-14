import '../styles/actionForms.css';
import { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import { AuthContext } from '../../context/auth.context';

const API_URL = 'https://women-of-hip-hop.herokuapp.com/auth/change-picture';

function ChangePictureForm(props) {
  const { user, authenticateUser } = useContext(AuthContext);
  const [ newPicture, setNewPicture ] = useState(user.picture);
  const [ message, setMessage ] = useState({text: undefined, type: 'error'});
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    axios.patch(`${API_URL}`, { picture: newPicture }, {
      headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` }})
      .then(response => {
        authenticateUser();
        setMessage({text: 'Picture successfully modified.', type: 'success'});
      })
      .catch(error => {
        const errorDescription = error.response.data.message;
        setMessage({text: errorDescription, type: 'error'});
      });
  };

  return (
    <form id="changePicture" className="actionForm">
      { message.text &&
        <p className={message.type === 'error' ? 'errorMessage' : 'message'}>
          {message.text}
        </p> }
      <label>New picture's URL</label>
      <input type='url' name='newPicture' value={newPicture}
             onChange={event => setNewPicture(event.target.value)}/>
      <div className="preview">
        <label>Preview:</label>
        <img alt="preview" src={newPicture === '' ? 'https://i.imgflip.com/3es772.png' : newPicture}/>
        {newPicture === '' && <p className='previewText'>Waiting for your input...</p>}
      </div>
      <button onClick={event => handleSubmit(event)}>Submit</button>
    </form>
  );
}

export default ChangePictureForm;
