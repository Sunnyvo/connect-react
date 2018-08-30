import React from 'react';
// import './todo.css'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';


class NewList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div className="newList">
        <Form>
          <FormGroup>
            <Label for="listName">List name</Label>
            <Input name="listName" id="listName" placeholder="Please enter List name" />
          </FormGroup>
          <FormGroup>
            <Label for="listDescription">List name</Label>
            <Input name="listName" id="listName" placeholder="Please enter Description" />
          </FormGroup>
          <Button>Add</Button>
        </Form>
      </div>
    );
  }
}

export default NewList;
