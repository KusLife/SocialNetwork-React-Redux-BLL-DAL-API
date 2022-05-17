import React from 'react';
import s from './Profile.module.css';
import Spitz from '../../../pic/Spitz.jpg';
import PreloaderGif from '../../../common/preloader/PreloaderGif';
import MyProfileStatus from './MyProfileStatus';

//myId = 23641}

const MyProfile = (props) => {
  if (!props.myProfile) {
    // return <div>'...'</div>;
     return <PreloaderGif/>
  }
 return (
    <div>
      <div className={s.Profile}>
        <div className={s.AvaInf}>
          <div>
            {/* <img src={Spitz} /> */}
            <img
              alt=""
              src={
                props.myProfile.photos.small 
                  != null
                  ? props.myProfile.photos.small
                  : Spitz
              }/>
          </div>
          {/* Ava and prfl inf */}
          <p>{props.myProfile.fullName}</p>
          <p>stat  :{props.status}</p>
        </div>
        <MyProfileStatus status = {props.status} updateStatusThunk={props.updateStatusThunk} />
      </div>
    </div>
  );
};

export default MyProfile;
