import "./MainPage.css";
import {FC} from "react";
import { IMainPageProps } from "./typing";
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import {Navbar} from "../../components/Navbar";
export const MainPage: FC<IMainPageProps> = () => {
    return (
        <>
            <Navbar/>
            <Container className="">
                <Container className="intro">
                    <h1>Доставка грузов на Марс</h1>
                    <Container className="div text" style={{fontSize : "18px"}}>
                        <p>
                            Вам требуется доставить грузы гражданского или военного назначения на Марс?
                            Корпорация SpaceY, используя свои новейшие корабли StarShip, готова осуществить доставку.
                        </p>
                    </Container>
                    <Link to="/cargo_catalog" className='btn mx-auto btn_ref border border-dark' style={{height:"80px",width: "200px", display: "flex", alignItems: "center", justifyContent: "center"}}>
                    Перейти к Каталогу

                    </Link>
                </Container>
            </Container>
        </>
    );
};