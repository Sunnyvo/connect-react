import React from 'react';
import Item from '../item/item'
import { Card, Button, CardImg, CardTitle,
CardBody } from 'reactstrap';
class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  initializeItems() {
    return this.props.list.todo_items.map(
      (item) => {
        return (
          <Item item = { item }/>
        )
      }
    )
  }

  render() {
    console.log(this.props)
    return (
    <Card style ={{marginBottom: 20}}>
      <CardTitle style ={{padding: 20}} >{this.props.list.content}</CardTitle>
      <CardImg top width="100%" src="https://image.shutterstock.com/image-vector/summer-spring-sunny-meadow-green-260nw-1029843514.jpg" alt="Card image cap" />
      <CardBody>
        {this.initializeItems()}
        <Button>Add</Button>
      </CardBody>
    </Card>
    );
  }
}

export default List;
