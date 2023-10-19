import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const User = () => {
  const user_id = useParams();
  const navigation = useNavigate();
  console.log(user_id);
  return (
    <div>
      <h2>{user_id.id}</h2>
      <button type="button" className="btn btn-primary" onClick={() => {navigation("/Count")}}>
        CLICK ME
      </button>
    </div>
  );
};

export default User;
