import React from 'react';
import ListContainer from './listcontainer';
import NewList from './newlist';
import { Row, Col } from 'reactstrap';

class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col>
            <NewList/>
          </Col>
        </Row>
        <ListContainer lists = {this.props.lists}/>
      </div>
    );
  }
}

export default Todo;
