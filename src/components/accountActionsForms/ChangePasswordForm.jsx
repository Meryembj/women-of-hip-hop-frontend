import { useState } from "react";

function ChangePasswordForm(props) {
  return (
    <form id="changePassword" className="actionForm">
      <label>New password</label>
      <input type="text" name="username" value=''
             onChange={() => {}} />
    </form>
  );
}

export default ChangePasswordForm;
