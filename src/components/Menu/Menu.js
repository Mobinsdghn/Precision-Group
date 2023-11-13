import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Menu.css";
import { useEffect, useState } from "react";
import { MDBBtn, MDBIcon, MDBInput, MDBInputGroup } from "mdb-react-ui-kit";

const Menu = () => {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div>
        <Navbar
          style={{
            borderBottomRightRadius: "50px",
            borderBottomLeftRadius: "50px",
          }}
          className={"navbar " + (isNavbarFixed ? " fixed" : "")}
        >
          <Navbar.Collapse className="mt-1 pt-5 px-5"  id="">
            <Nav >
              <NavDropdown
                title="Product Categories"
                className=" "
              >
                <NavDropdown.Item href="#action/3.1">
                  Test & Measurement
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  RF Components
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Waveguide Components
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Wireless Modules
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Custom Products"
                className=" "
                menuVariant="dark"
              >
                <NavDropdown.Item href="#action/3.1">
                  Printed Circuit Boards
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Cable Assembly
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Waveguide Products
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Directory"
                className=" "
                menuVariant="dark"
              >
                <NavDropdown.Item href="#action/3.1">
                  Company Directory
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  All Companies
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Add Your Company
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand href="#home" style={{marginRight:"250px"}}>
            <img
              style={{
                width: "120px",
                height: "120px",
                objectFit: "cover",
              }}
              src={require("./../../image/precision_logo.png")}
              alt=""
            />
          </Navbar.Brand>
          <MDBInputGroup style={{width:"350px",margin:"0 50px",}}>
            <MDBInput label="Search" />
          </MDBInputGroup>
        </Navbar>
      </div>
    </>
  );
};

export default Menu;
