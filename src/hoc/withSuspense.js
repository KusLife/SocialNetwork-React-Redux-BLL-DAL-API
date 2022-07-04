import React from 'react';
import PreloaderGif from '../common/preloader/PreloaderGif'

const withSuspense = (Component) => {
  return (props) => {
    return (
      <React.Suspense fallback={<PreloaderGif/>}>
        <Component {...props} />
      </React.Suspense>
    );
  };
};

export default withSuspense;
