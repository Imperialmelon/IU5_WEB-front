import "./Navbar.css"
import {FC} from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavbarComp from "react-bootstrap/Navbar";
import { NavLink} from "react-router-dom";

export const Navbar: FC = () => {
    return (
        <>
            <NavbarComp data-bs-theme="dark" className="dark-blue-back" sticky="top" style={{height: "90px"}}>
                <Container style={{margin: "10px"}}>
                    <NavbarComp.Brand className="brand-custom">
                        <NavLink to="/" className="text-white text-decoration-none">
                            SpaceY
                        </NavLink>
                    </NavbarComp.Brand>
                    <NavbarComp.Toggle
                        aria-controls="basic-navbar-nav"
                        className="outline-none"
                    />
                    <NavbarComp.Collapse id="basic-navbar-nav" style={{margin: "15px", fontFamily : "SPX"}}>
                        <Nav className="me-auto gap-4 gap-sm-3 fs-4">
                            <NavLink to="cargo_catalog" className="text-white text-decoration-none">
                                Каталог
                            </NavLink>
                        </Nav>
                    </NavbarComp.Collapse>
                </Container>
            </NavbarComp>
        </>
    );
};