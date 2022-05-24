import React from 'react';
import s from './Profile.module.css';
import Spitz from '../../../pic/Spitz.jpg';
import PreloaderGif from '../../../common/preloader/PreloaderGif';
import MyProfileStatusHooks from './MyProfileStatusHooks';


const MyProfile = (props) => {
  if (!props.myProfile) {
     return <PreloaderGif/>
  }
 return (
    <div>
      <div className={s.Profile}>
        <div className={s.AvaInf}>
          <div>
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
        <MyProfileStatusHooks status = {props.status} updateStatusThunk={props.updateStatusThunk} />
      </div>
    </div>
  );
};

export default MyProfile;
