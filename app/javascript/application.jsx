import React, { Component } from 'react';
// import {connect} from 'react-redux'
//  from './action/action.js';
import Navigation from './components/navigation/navigation';
import Todo from './components/todo/todo';
// const mapStateToProps = (state = {}) => {
//   return {...state};
// };

export default class Application extends Component {

  componentDidMount(){
  }

  render() {
    return (
      <div className="App">
        <header className="Header" style={{marginBottom: "30px"}}>
          <Navigation/>
          <Todo/>
        </header>
      </div>
    );
  }
}

// export default  connect(mapStateToProps)(Application);
