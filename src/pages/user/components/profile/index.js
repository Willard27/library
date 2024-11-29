import { Button } from "antd";
import "./index.css";
import { useEffect } from "react";

function Profile(params) {
  let edit = false;
  function handleClick() {
    edit = !edit;
  }
  useEffect(() => {
    console.log(edit);
  }, [edit]);
  return (
    <div className="profile">
      {!edit ? (
        <div className="profile_show_wrap">
          <span id="user_name">nickname</span>
          <span id="uid">id</span>
          <Button onClick={handleClick}>Edit profile</Button>
          <span>institute</span>
        </div>
      ) : (
        <div className="profile_edit_wrap"></div>
      )}
    </div>
  );
}

export default Profile;
