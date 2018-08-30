import React from 'react';
// import {logo} from './larion.png';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand>
            <img src="https://larion.com/wp-content/uploads/2017/04/logo320x92.png" height="30" className="d-inline-block align-top"/>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="">Training</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://larion.com/services/">Projects</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Infos
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    About us
                  </DropdownItem>
                  <DropdownItem>
                    Contact us
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    FAQs
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
