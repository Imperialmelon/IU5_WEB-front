import "./LoginPage.css";
import {FC} from "react";
import {Container} from "react-bootstrap";
import {Navbar} from "../../components/Navbar";
export const LoginPage: FC = () => {
    return (
        <>
            <Navbar/>
            <Container className="d-flex justify-content-center align-items-center mt-5 ">
            <div className="card border-0" style={{width: '100%', maxWidth: '550px'}}>
            <div className="card-body ">
                <h5 className="card-title text-center mb-4">Вход</h5>
                <form>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">
                            Организация
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="form-control border-dark rounded-0"
                            placeholder="Организация"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label border-dark rounded-0">
                            Пароль
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="form-control border-dark rounded-0"
                            placeholder="Введите пароль"
                            required
                        />
                    </div>
                    <button type="submit" className="btn change_back_button w-100">
                        Войти
                    </button>
                </form>
            </div>
        </div>
            </Container>
        </>
    );
};