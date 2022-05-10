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



  // let newEventPost = React.createRef();
  // let addPost = () => {
  //   props.addPostAC();
  // };
  // let onChangePost = () => {
  //   let text = newEventPost.current.value;
  //   props.onChangeTextAC(text);
  // };
  
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
        
        {/* remove this code from here somewhere to events*/}
        {/* <div>Date new EVENT:)</div>
        <textarea
          onChange={onChangePost}
          ref={newEventPost}
          value={props.newPostTxt}
        />
        <button onClick={addPost}>Add events</button> */}
      </div>
    </div>
  );
};

export default MyProfile;
