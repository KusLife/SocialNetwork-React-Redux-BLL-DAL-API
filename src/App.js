import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import ContentContainer from './components/Content/ContantPage/ContentContainer';
import Footer from './components/Footer/Footer';
import { initialazeAppThunk } from './redux/app-reducer';
import { connect, Provider } from 'react-redux';
import store from './redux/redux-store';
import { HashRouter } from 'react-router-dom';


function App(props) {
  props.initialazeAppThunk();
  // In case we wanna to check authorisation right at the APP start
  // if (!props.isAppInitialazed) {
  //   return <PreloaderGif />;
  // }
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
    <HashRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  );
};

export default CrazyHocApp;
