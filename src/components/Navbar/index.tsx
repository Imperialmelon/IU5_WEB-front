import "./Navbar.css"
import {FC} from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavbarComp from "react-bootstrap/Navbar";
import { NavLink} from "react-router-dom";
import { selectUser } from "../../core/store/slices/selector";
import { useDispatch, UseDispatch, useSelector } from "react-redux";
import { api } from "../../core/api";
import { refreshUser } from "../../core/store/slices/userSlice";
import { S } from "@vite-pwa/assets-generator/dist/shared/assets-generator.5e51fd40.mjs";

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
    const {username, Is_Auth} = useSelector(selectUser)
    const dispatch = useDispatch()
    const logout = () =>{
        api.user.userLogoutCreate().then(() => console.log('ok'))
        .catch(error => console.log(error))
        dispatch(refreshUser())
    }
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
                            <Nav className="me-auto gap-4 gap-sm-3 fs-4 brand-custom">
                            <NavLink to="/user_account" className="text-white text-decoration-none">
                                Кабинет
                            </NavLink>
                            <Nav className="me-auto gap-4 gap-sm-3 fs-4 brand-custom">
                            <NavLink to="/shipping_list" className="text-white text-decoration-none">
                                Отправления
                            </NavLink>
                        </Nav>
                        </Nav>
                        </Nav>
                        {Is_Auth ? 
                        (
                            <>
                            <Nav className="me-3">
                            <NavLink to="/user_account" className="text-white text-decoration-none">
                            {username}
                            </NavLink>
                            </Nav>
                            <Nav className="me-3">
                                    <NavLink to="/cargo_catalog" onClick={logout} className="text-white text-decoration-none">
                                        Выход
                                    </NavLink>
                                </Nav>
                            </>
                        ) : (
                            <>
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
                            </>
                        )
                        }

                    </NavbarComp.Collapse>
                </Container>
            </NavbarComp>
        </>
    );
};

