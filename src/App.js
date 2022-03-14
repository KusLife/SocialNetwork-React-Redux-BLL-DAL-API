import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Navigation } from './components/Navigation/Navigation';
import { Content } from './components/Content/Content';
import { Footer } from './components/Footer/Footer';
import {updateNewPostTxt} from './state'



function App(props) {
  return (
    <div className="App">
      <Header />

      <Navigation state={props.state} />

      <Content state={props.state}
       addPotsEv={props.addPotsEv}
       updateNewPostTxt={updateNewPostTxt}/>

      <Footer />
    </div>
  );
}

export default App;
