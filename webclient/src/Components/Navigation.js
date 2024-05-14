import { Link } from "react-router-dom";
import {
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
} from "reactstrap";

const Navigation = () => {
  return (
    <div>
      <Navbar>
        <NavbarBrand tag={Link} to="/">
          MedicalFile
        </NavbarBrand>
        <Nav className="me-auto">
          <NavItem>
            <NavLink tag={Link} to="/patients" className="text-secondary">
              Patients
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/diseases" className="text-secondary">
              Disease records
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/doctors" className="text-secondary">
              Doctors
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/test" className="text-secondary">
              Test
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Navigation;
