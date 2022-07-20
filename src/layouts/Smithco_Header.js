import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Collapse,
  Nav,
  NavItem,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Button,
} from "reactstrap";
import { ReactComponent as LogoWhite } from "../assets/images/logos/xtremelogowhite.svg";
import user1 from "../assets/images/users/user1.jpg";

const Smithco_Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const Handletoggle = () => {
    setIsOpen(!isOpen);
  };
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  return (
    <Navbar color="primary" dark expand="md">
      <div className="d-flex align-items-center">
        <NavbarBrand href="/" className="d-lg-none">
        </NavbarBrand>
        <Button
          color="primary"
          className="d-lg-none"
          onClick={() => showMobilemenu()}
        >
          <i className="bi bi-list"></i>
        </Button>
      </div>
      <div className="hstack gap-2">
        <Button
          color="primary"
          size="sm"
          className="d-sm-block d-md-none"
          onClick={Handletoggle}
        >
          {isOpen ? (
            <i className="bi bi-x"></i>
          ) : (
            <i className="bi bi-three-dots-vertical"></i>
          )}
        </Button>
      </div>

      <Collapse navbar isOpen={isOpen}>
        <Nav className="me-auto" navbar>
          <NavItem>
            <Link to="/smithco" className="nav-link">
              Home: Smithco
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/smithco/smithco_user_management" className="nav-link">
              User management
            </Link>
          </NavItem>
		  <NavItem>
            <Link to="/smithco/smithco_data_to_aws" className="nav-link">
              Data: Inbound to AWS
            </Link>
          </NavItem>
		  <NavItem>
            <Link to="/smithco/smithco_prepare_engine_run" className="nav-link">
              Prepare for engine run
            </Link>
          </NavItem>
		  <NavItem>
            <Link to="/smithco/smithco_engine_run" className="nav-link">
              Engine run
            </Link>
          </NavItem>
		  <NavItem>
            <Link to="/smithco/smithco_output" className="nav-link">
              Output review
            </Link>
          </NavItem>
		  <NavItem>
            <Link to="/smithco/smithco_data_to_client" className="nav-link">
              Data: Outbound to client
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Smithco_Header;