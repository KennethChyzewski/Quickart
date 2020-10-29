import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import WelcomePage   from './react-components/WelcomePage';
import AboutPage     from './react-components/AboutPage';
import LoginPage     from './react-components/LoginPage';
import RegisterPage  from './react-components/RegisterPage';
import NavigationBar from './react-components/NavigationBar';
import DetailedPost  from './react-components/PostDetailPage';
import StickyBar from './react-components/StickyBar';
class App extends React.Component {

  render(){
    return (
      <div className="App">
        <BrowserRouter>
          {/* Place the NavigationBar outside the Switch so its always present */}
          <NavigationBar />
          {/* Route placed outside the switch make it the default page upon startup */}
          <Route exact path='/' render={() => 
                            (<WelcomePage appState={this.state}/>)}/>
          <Switch>
            <Route exact path='/about' render={() => 
                            (<AboutPage appState={this.state}/>)}/>
            <Route exact path='/register' render={() => 
                            (<RegisterPage appState={this.state}/>)}/>
            <Route exact path='/login' render={() => 
                            (<LoginPage appState={this.state}/>)}/>
            <Route exact path='/DetailPosting' render={() => 
                            (< DetailedPost appState={this.state}/>)}/> 
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
  
export default App;
