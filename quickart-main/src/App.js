import React from 'react';
import './App.css';
import WelcomePage from './react-components/WelcomePage';
import NavigationBar from './react-components/NavigationBar';

class App extends React.Component {

  render(){
    return (
      <div className="App">
       <NavigationBar />
       <WelcomePage />
      </div>
    );
  }
}
  

export default App;
