import { Link } from "react-router-dom";
import { Nav, NavItem, NavLink, Navbar, NavbarBrand } from "reactstrap";

const Navigation = () => {
  return (
    <Navbar>
      <NavbarBrand tag={Link} href="/">
        MedicalFile
      </NavbarBrand>
      <Nav className="me-auto">
        <NavItem>
          <NavLink tag={Link} to="/patients">
            Patients
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/diseases">
            Disease records
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
