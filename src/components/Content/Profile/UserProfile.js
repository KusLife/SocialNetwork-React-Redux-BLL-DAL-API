import React from 'react';
import s from './Profile.module.css';
import ketty from '../../../pic/ketty.jpg';
// import PreloaderGif from '../../../common/preloader/PreloaderGif'

const UserProfile = (props) => {
  if (!props.profile) {
    return <div>'...'</div>;
    //  return <PreloaderGif/>
  }
  return (
    <div>
      <div className={s.Profile}>
        <div className={s.AvaInf}>
          <div>
            <img
              alt=""
              src={
                props.profile.photos.small != null
                  ? props.profile.photos.small
                  : ketty
              }
            />
          </div>
          {/* Ava and prfl inf */}
          <p>{props.profile.fullName}</p>
        </div>
        <div>
          <h4>
            Looking for a job:
            <h5>{props.profile.lookingForAJobDescription}</h5>
          </h4>
        </div>

        <div>
          <h4>
            My contacts:
            <h5>{props.profile.contacts.facebook}</h5>
            <h5>{props.profile.contacts.instagram}</h5>
          </h4>
        </div>

        <div>{props.profile.aboutMe}</div>
        <textarea value="" />
        <button>send</button>
      </div>
    </div>
  );
};

export default UserProfile;
