import React from 'react';
import { Link } from 'react-router-dom';

let UserData = (props) => {
  return (
    <div>
      <div>
        {props.isAuth ? props.login : 
       <Link to='/login'>Login</Link> }
      </div>
    </div>
  );
};

export default UserData;
