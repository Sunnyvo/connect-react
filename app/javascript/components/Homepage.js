import React, { Component } from 'react';
import Navigation from './navigation/navigation';
import Todo from './todo/todo';

// import
// const mapStateToProps = (state = {}) => {
//   return {...state};
// };

export default class Homepage extends Component {

  componentDidMount(){
  }

  render() {
    return (
      <div className="App">
        <header className="Header" style={{marginBottom: "30px"}}>
          <Navigation/>
          <Todo lists = {this.props.lists}/>
        </header>
      </div>
    );
  }
}

// export default  connect(mapStateToProps)(Application);
