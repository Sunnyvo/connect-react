import React from 'react';
import List from './list/list';
import { Row, Col } from 'reactstrap';

class ListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  initializeLists(){
    return this.props.lists.map(
      (list) => {
        return(
              <Col xs="4">
                <List list ={list}/>
              </Col>
        )
      }
    )
  }

  render() {
    return (
      <Row>
        {this.initializeLists()}
      </Row>
    );
  }
}

export default ListContainer;
