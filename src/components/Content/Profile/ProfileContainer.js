import React from 'react';
import {
  addPotsEventActionCreater,
  updateTextActionCreater,
} from '../../../redux/post-ev-reducer';
import StoreContext from '../../../storeContext';
import { Profile } from './Profile';

const ProfileContainer = () => {
  return (
    <div>
      <StoreContext.Consumer>
        {(store) => {
          let addPost = () => {
            store.dispatch(addPotsEventActionCreater());
          };
          let onChangeText = (text) => {
            store.dispatch(updateTextActionCreater(text));
          };
          let newPost = store.getState().eventsData.newPostTxt;
          return (
            <Profile
              addPost={addPost}
              onChangeText={onChangeText}
              newPostTxt={newPost}
            />
          );
        }}
      </StoreContext.Consumer>
    </div>
  );
};

export default ProfileContainer;
