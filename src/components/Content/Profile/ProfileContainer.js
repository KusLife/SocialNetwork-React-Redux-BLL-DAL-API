import React from 'react';
import {
  addPotsEventActionCreater,
  updateTextActionCreater,
} from '../../../redux/post-ev-reducer';
import { Profile } from './Profile';

const ProfileContainer = (props) => {
  let addPost = () => {
    props.store.dispatch(addPotsEventActionCreater());
  };

  let onChangeText = (text) => {
    props.store.dispatch(updateTextActionCreater(text));
  };

  let newPost = props.store.getState().eventsData.newPostTxt;

  return (
    <div>
      <Profile
        addPost={addPost}
        onChangeText={onChangeText}
        newPostTxt={newPost}
      />
    </div>
  );
};

export default ProfileContainer;
