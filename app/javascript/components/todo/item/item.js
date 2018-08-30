import React from 'react';
import { Row, Col, Input, Button } from 'reactstrap';
let options = ['Not Started', 'In-Progress', 'Complete', 'Pending']
class Item extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  
  initializeOption(optionState) {
    return options.map(
      (option) => {
        return (
          <option selected={optionState == option} >{option}</option>
        )
      }
    )
  }
  render() {
    let optionState = this.props.item.status

    return (
      <Row style = {{marginTop: 10}}>
        <Col xs="7">{ this.props.item.content }</Col>
        <Col xs="4">
          <Input type="select" name="select" id="statusSelect">
            {/* <option selected={optionState == "Not Started"} >Not Started</option>
            <option selected={optionState == "In-Progress"} >In Progress</option>
            <option selected={optionState == "Complete"}>Completed</option>
            <option selected={optionState == "Pending"}>Pending</option> */}
            {this.initializeOption(optionState)}
          </Input>
        </Col>
        <Col xs ="1"><Button style={{marginRight:10}} onClick={this.removeItem}>x</Button> </Col>
      </Row>
    );
  }
}

export default Item;
