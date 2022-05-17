import React from 'react';
import { Link } from 'react-router-dom';

let AuthUserData = (props) => {
  return (
    <div>
      <div>
        {props.isAuth 
        ?<div>{props.login} <button onClick={props.logoutThunk}> Log out </button> </div> 
        : <Link to='/login'>Login</Link> }
      </div>
    </div>
  );
};

export default AuthUserData;
