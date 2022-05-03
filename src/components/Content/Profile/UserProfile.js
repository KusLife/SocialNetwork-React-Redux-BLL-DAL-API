import React from 'react';
import s from './Profile.module.css';
import ketty from '../../../pic/ketty.jpg';
// import PreloaderGif from '../../../common/preloader/PreloaderGif'

const UserProfile = (props) => {
 if (!props.profile) {
   //x=PreloaderGif
   return <x/>
 }
  return (
    <div>
      <div className={s.Profile}>
        <div className={s.AvaInf}>
          <div>
            <img
                  alt=""
                  src={props.profile.photos.small != null ? props.profile.photos.small : ketty}
                />
          </div>
          {/* Ava and prfl inf */}
          <p>{props.profile.fullName}</p>
        </div>
        <div><h4>Looking for a job: {props.profile.lookingForAJobDescription}</h4></div>
        <div>{props.profile.aboutMe}</div>
        <textarea/>
        <button>send</button>
      </div>
    </div>
  );
};

export default UserProfile
