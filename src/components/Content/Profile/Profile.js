import React from 'react';
import s from './Profile.module.css';


export const Profile = () => {
  let newPost = React.createRef();

  let addPost = () => {
    let text = newPost.current.value;
    alert(text);
  };

  return (
    <div>
      <div className={s.Profile}>
        <div className={s.AvaInf}>
          <div>
            <img src='' />
          </div>
          {/* Ava and prfl inf */}
          <p>Big Scary Dog, 5y</p>
        </div>
        <div>Date new EVENT:)</div>
        <textarea ref={newPost}></textarea>
        <button onClick={addPost}>Post</button>
      </div>
    </div>
  );
};

// "https://spitz-sobaka.ru/wp-content/uploads/2018/09/2-babydoll-deystvitelno-napominaet-kukolku.jpeg"
