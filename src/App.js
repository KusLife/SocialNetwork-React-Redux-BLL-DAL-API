import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Navigation } from './components/Navigation/Navigation';
import  ContentContainer  from './components/Content/ContentContainer';
import { Footer } from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header />

      <Navigation  />

      <ContentContainer />

      <Footer />
    </div>
  );
}

export default App;


{/* <Navigation store={props.store} state={props.state} /> */}

{/* <Content store={props.store} state={props.state}/> */}
