import React from 'react';
import s from './Profile.module.css';
import Spitz from '../../../pic/Spitz.jpg';
import {addPotsEvActionCreater, updateNewPostTxtActionCreater} from '../../../redux/post-ev-reducer'


export const Profile = (props) => {
  let newPost = React.createRef();
  let addPost = () => {
    props.store.dispatch(addPotsEvActionCreater());
  };
  let onChangePost = () => {
    let text = newPost.current.value;
    props.store.dispatch(updateNewPostTxtActionCreater(text));
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
          ref={newPost}
          value={props.store.getState().eventsData.newPostTxt}
        />
        <button onClick={addPost}>Add events</button>
      </div>
    </div>
  );
};


// "https://spitz-sobaka.ru/wp-content/uploads/2018/09/2-babydoll-deystvitelno-napominaet-kukolku.jpeg"
