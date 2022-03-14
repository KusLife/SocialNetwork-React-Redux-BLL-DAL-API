import React from 'react';
import s from './Profile.module.css';
import Spitz from '../../../pic/Spitz.jpg';

export const Profile = (props) => {
  let newPost = React.createRef();

  let addPost = () => {
    let text = newPost.current.value;
    props.addPotsEv(text);
    newPost.current.value = '';
  };

  let onChangePost = () => {
    let text = newPost.current.value;
    props.updateNewPostTxt(text);
  };

  return (
    <div>
      <div className={s.Profile}>
        <div className={s.AvaInf}>
          <div>
            {/* Why it does't work!??
              <img src='../../../pic/Spitz.jpg' /> */}
            <img src={Spitz} />
          </div>
          {/* Ava and prfl inf */}
          <p>Big Scary Dog, 5y</p>
        </div>
        <div>Date new EVENT:)</div>
        <textarea
          onChange={onChangePost}
          ref={newPost}
          value={props.newPostTxt}
        />
        <button onClick={addPost}>Post</button>
      </div>
    </div>
  );
};

// "https://spitz-sobaka.ru/wp-content/uploads/2018/09/2-babydoll-deystvitelno-napominaet-kukolku.jpeg"
