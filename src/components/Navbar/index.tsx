import "./Navbar.css"
import {FC} from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavbarComp from "react-bootstrap/Navbar";
import { NavLink} from "react-router-dom";

// export const Navbar: FC = () => {
//     return (
//         <>
//             <NavbarComp expand="lg"
//                         data-bs-theme="dark"
//                         className="dark-blue-back"
//                         style={{height: "90px"}}
//             >
//                 <Container style={{margin: "10px"}} className="d-flex">
//                     <NavbarComp.Brand className="brand-custom">
//                         <NavLink to="/" className="text-white text-decoration-none">
//                             SpaceY
//                         </NavLink>
//                     </NavbarComp.Brand>
//                     <NavbarComp.Toggle
//                         aria-controls="basic-navbar-nav"
//                         className="outline-none"
//                     />
//                     <NavbarComp.Collapse id="basic-navbar-nav" style={{margin: "15px", fontFamily : "SPX"}}>
//                         <Nav className="me-auto gap-4 gap-sm-3 fs-4">
//                             <NavLink to="/cargo_catalog" className="text-white text-decoration-none">
//                                 Каталог
//                             </NavLink>
//                         </Nav>
//                     </NavbarComp.Collapse>
//                     <NavbarComp.Collapse className="justify-content-end">
//                         <Nav className="me-3">
//                             <NavLink to="/registration" className="text-white text-decoration-none">
//                                 Регистрация
//                             </NavLink>
//                         </Nav>
//                         <Nav className="me-3">
//                             <NavLink to="/login" className="text-white text-decoration-none">
//                                 Вход
//                             </NavLink>
//                         </Nav>
//                     </NavbarComp.Collapse>
//                 </Container>
//             </NavbarComp>
//         </>
//     );
// };

export const Navbar: FC = () => {
    return (
        <>
            <NavbarComp expand="lg" data-bs-theme="dark" className="dark-blue-back" style={{ height: "90px" }}>
                <Container fluid style={{ margin: "10px" }}> {/* Изменено на Container.fluid */}
                    <NavbarComp.Brand className="brand-custom">
                        <NavLink to="/" className="text-white text-decoration-none">
                            SpaceY
                        </NavLink>
                    </NavbarComp.Brand>
                    <NavbarComp.Collapse className="justify-content-end brand-custom"> {/* Перемещён collapse и удалён лишний */}
                    <Nav className="me-auto gap-4 gap-sm-3 fs-4">
                            <NavLink to="/cargo_catalog" className="text-white text-decoration-none font_rob">
                                Каталог
                            </NavLink>
                            <Nav className="me-3">
                            <NavLink to="/user_account" className="text-white text-decoration-none">
                                Кабинет
                            </NavLink>
                        </Nav>
                        </Nav>
                        <Nav className="me-3">
                            <NavLink to="/registration" className="text-white text-decoration-none font_rob">
                                Регистрация
                            </NavLink>
                        </Nav>
                        <Nav className="me-3">
                            <NavLink to="/login" className="text-white text-decoration-none font_rob">
                                Вход
                            </NavLink>
                        </Nav>
                    </NavbarComp.Collapse>
                </Container>
            </NavbarComp>
        </>
    );
};

