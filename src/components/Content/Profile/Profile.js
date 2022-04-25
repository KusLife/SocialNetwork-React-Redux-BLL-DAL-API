import React from 'react';
import MyProfile from './MyProfile';
import UserProfile from './UserProfile';

// import s from './Profile.module.css';

const Profile = (props) => {
  
  return (
    <div>
      <MyProfile {...props}/>
      <UserProfile profile={props.profile}/>
      {/* here we'll set a PERSON */}
    </div>
  );
};

export default Profile
