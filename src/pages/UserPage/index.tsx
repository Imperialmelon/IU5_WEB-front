import "./UserPage.css";
import {FC} from "react";
import {Container} from "react-bootstrap";
import {Navbar} from "../../components/Navbar";
export const UserPage: FC = () => {
    return (
        <>
            <Navbar/>
            <Container className="d-flex justify-content-center align-items-center mt-5">
            <div className="card border-0" style={{width: '100%', maxWidth: '550px'}}>
            <div className="card-body">
                <h5 className="card-title text-center mb-4">Изменить данные аккаунта</h5>
                <form>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">
                            Организация
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="form-control border border-dark rounded-0"
                            placeholder="Введите новый логин"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">
                            E-mail
                        </label>
                        <input
                            type="text"
                            id="email"
                            className="form-control border border-dark rounded-0"
                            placeholder="Введите новый e-mail"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Пароль
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="form-control border border-dark rounded-0"
                            placeholder="Введите новый пароль"
                        />
                    </div>
                    <button type="submit" className="btn change_back_button w-100">
                        Изменить
                    </button>
                </form>
            </div>
            </div>
            </Container>
        </>
    );
};