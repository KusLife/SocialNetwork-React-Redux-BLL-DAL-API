import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Navigation } from './components/Navigation/Navigation';
import { Content } from './components/Content/Content';
import { Footer } from './components/Footer/Footer';
// import {updateNewPostTxt} from './state'

function App(props) {
  return (
    <div className="App">
      <Header />

      <Navigation store={props.store} state={props.state} />

      <Content store={props.store} state={props.state}/>

      <Footer />
    </div>
  );
}

export default App;
