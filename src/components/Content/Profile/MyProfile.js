import React from 'react';
import s from './Profile.module.css';
import Spitz from '../../../pic/Spitz.jpg';

//myId = 23641}

const MyProfile = (props) => {
  let newEventPost = React.createRef();

  let addPost = () => {
    props.addPostAC();
  };
  let onChangePost = () => {
    let text = newEventPost.current.value;
    props.onChangeTextAC(text);
  };
  return (
    <div>
      <div className={s.Profile}>
        <div className={s.AvaInf}>
          <div>
            <img src={Spitz} />
          </div>
          {/* Ava and prfl inf */}
          <p>Big Scary Dog, 5y</p>
        </div>
        <div>Date new EVENT:)</div>
        <textarea
          onChange={onChangePost}
          ref={newEventPost}
          value={props.newPostTxt}
        />
        <button onClick={addPost}>Add events</button>
      </div>
    </div>
  );
};

export default MyProfile
