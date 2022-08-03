import React from 'react';
import MyProfile from './MyProfile';
import UserProfile from './UserProfile';

const Profile = (props) => {
  
  return (
    <div>
      <MyProfile isOwner={props.isOwner}
       myProfile={props.myProfile} {...props}/>
      <UserProfile profile={props.profile}/>
      
    </div>
  );
};

export default Profile
