import "./RegistrationPage.css";
import {FC} from "react";
import {Container} from "react-bootstrap";
import {Navbar} from "../../components/Navbar";
export const RegistrationPage: FC = () => {
    return (
        <>
            <Navbar/>
            <Container className="d-flex justify-content-center align-items-center mt-5">
            <div className="card border-dark rounded-0" style={{width: '100%', maxWidth: '750px'}}>
            <div className="card-body">
                <h5 className="card-title text-center mb-4">Регистрация</h5>
                <form>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">
                            Название Организации
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="form-control border border-dark rounded-0"
                            placeholder="Организация"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label " >
                            Корпоративный E-mail
                        </label>
                        <input
                            type="text"
                            id="email"
                            className="form-control border border-dark rounded-0"
                            placeholder="Введите e-mail"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label ">
                            Пароль
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="form-control border border-dark rounded-0"
                            placeholder="Введите пароль"
                            required
                        />
                    </div>
                    <button type="submit" className="btn w-100 border border-dark rounded-0">
                        Зарегистрироваться
                    </button>
                </form>
            </div>
        </div>
            </Container>
        </>
    );
};