import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import ContentContainer from './components/Content/ContantPage/ContentContainer';
import Footer from './components/Footer/Footer';
import { initialazeAppThunk } from './redux/app-reducer';
import { connect, Provider } from 'react-redux';
import PreloaderGif from './common/preloader/PreloaderGif';
import store from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';
// import { compose } from 'redux';
// import withRouter from './hoc/withRouter';

function App(props) {
  props.initialazeAppThunk();

  // useEffect(() => {
  //   props.initialazeAppThunk()
  // }, [])

  // if (!this.props.isAuth) return <Navigate to="/login" />;
  if (!props.isAppInitialazed) {
    return <PreloaderGif />;
  }
  return (
    <div className="App">
      <Header />

      <Navigation />

      <ContentContainer />

      <Footer />
    </div>
  );
}

let mapStateToProps = (state) => ({
  isAppInitialazed: state.app.isAppInitialazed,
});

const AppContainer = connect(mapStateToProps, { initialazeAppThunk })(App);

const CrazyHocApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};

export default CrazyHocApp;
