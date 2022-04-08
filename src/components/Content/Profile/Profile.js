import React from 'react';
import s from './Profile.module.css';
import Spitz from '../../../pic/Spitz.jpg';

export const Profile = (props) => {
  let newEventPost = React.createRef();

  let addPost = () => {
    props.addPost();
  };
  let onChangePost = () => {
    let text = newEventPost.current.value;
    props.onChangeText(text);
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

// "https://spitz-sobaka.ru/wp-content/uploads/2018/09/2-babydoll-deystvitelno-napominaet-kukolku.jpeg"
