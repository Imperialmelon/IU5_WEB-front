import "./Navbar.css"
import {FC} from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavbarComp from "react-bootstrap/Navbar";
import { NavLink} from "react-router-dom";
import { selectUser } from "../../core/store/slices/selector";
import {  useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { api } from "../../core/api";
import { refreshApp } from "../../core/store/slices/appSlice";
import { setShippingData } from "../../core/store/slices/appSlice";
import { refreshUser } from "../../core/store/slices/userSlice";
import {selectApp} from "../../core/store/slices/selector";
import { useDispatch } from "../../core/store";
import { logoutUser } from "../../core/store/slices/userSlice";
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
    const {Shipping_id} = useSelector(selectApp);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    


    const logout = () =>{
        dispatch(logoutUser(Shipping_id.toString())).then(() => {
            dispatch(refreshApp())
            navigate('/')
        })
        .catch((data) =>{
            if (data.status == 404){
                dispatch(refreshApp())
                navigate('/')
            }
        })
//         if (Shipping_id != 0 ){
//         api.shipping.shippingDeleteDelete(Shipping_id.toString()).then(() => {console.log('ok')
            
//             api.user.userLogoutCreate().then(() =>{
//                 console.log('yeeeeeeeeeeeee')
//                 dispatch(setShippingData(0))
//                 console.log(Shipping_id)
//                 dispatch(refreshUser())
//                 navigate('/')
//             })
//             .catch(()=> {console.log('noooooooooooo')})
            


//         }
    
//     )
//         .catch(error => console.log(error))
// }
// else {
//     api.user.userLogoutCreate().then(() =>{
//         console.log('yeeeeeeeeeeeee')
//         dispatch(setShippingData(0))
//         console.log(Shipping_id)
//         dispatch(refreshUser())

//         navigate('/')
//     })
//     .catch(()=> {console.log('noooooooooooo')})
}
        
    
    return (
        <>
            <NavbarComp expand="lg" data-bs-theme="dark" className="dark-blue-back">
                <Container fluid style={{ margin: "10px" }}> {/* Изменено на Container.fluid */}
                    <NavbarComp.Brand className="brand-custom">
                        <NavLink to="/" className="text-white text-decoration-none">
                            SpaceY
                        </NavLink>
                    </NavbarComp.Brand>
                    <NavbarComp.Toggle aria-controls="basic-navbar-nav" />
                    <NavbarComp.Collapse className="justify-content-end brand-custom"> {/* Перемещён collapse и удалён лишний */}
                    <Nav className="me-auto gap-4 gap-sm-3 fs-4">
                            <NavLink to="/cargo_catalog" className="text-white text-decoration-none font_rob">
                                Каталог
                            </NavLink>
                            
                            <Nav className="me-auto gap-4 gap-sm-3 fs-4 brand-custom">
                                {Is_Auth ?                             <NavLink to="/user_account" className="text-white text-decoration-none">
                                Кабинет
                            </NavLink> : <></>
                                }
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

