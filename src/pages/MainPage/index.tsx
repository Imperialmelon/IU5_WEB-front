import "./MainPage.css";
import {FC} from "react";
// import { IMainPageProps } from "./typing";
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import {Navbar} from "../../components/Navbar";
import {ImageCarousel} from "./useMainPage.tsx"
export const MainPage: FC = () => {
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
                    <ImageCarousel />
    
                </Container>
            </Container>
        </>
    );
};