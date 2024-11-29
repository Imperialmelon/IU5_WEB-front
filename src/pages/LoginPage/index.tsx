import "./LoginPage.css";
import {FC, useState, useCallback} from "react";
import {Container} from "react-bootstrap";
import {Navbar} from "../../components/Navbar";
import { LoginDataProps } from "./typing";
import { ChangeEvent } from "../../App.typing";
import { api } from "../../core/api";
import { useDispatch } from "../../core/store";
import { saveUser } from "../../core/store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../core/store/slices/userSlice";





export const LoginPage: FC = () => {
    const navigate = useNavigate()
    const [LoginData, setLoginData] = useState<LoginDataProps>({
        username: "",
        password : ""
    })
    const [error, setError] = useState(''); // Состояние для сообщения об ошибке



    


    const handleLoginChange = (e : ChangeEvent) =>{
        const event = e.target
        const {value, id} = event
        setLoginData(prevData => ({
            ...prevData,
            [id]: value
        }));
        setError('');
    }

    const dispatch = useDispatch()

    const clickLogin = () => {
        setError('')
        if (LoginData.password && LoginData.username) {
            dispatch(loginUser(LoginData))
                .unwrap()
                .then((username) => {
                    console.log('Успешный вход:', username)
                    navigate('/cargo_catalog')
                })
                .catch((errorMessage) => {
                    setError(errorMessage)
                    console.log('Ошибка входа:', errorMessage)
                })
        }
    }

    const handleLogin = useCallback(async () => {
        if (!LoginData.password || !LoginData.username) {
            return // Можно добавить локальную валидацию
        }

        try {
            const resultAction = await dispatch(loginUser(LoginData))
            
            if (loginUser.fulfilled.match(resultAction)) {
                // Успешная авторизация
                navigate('/cargo_catalog')
            } else if (loginUser.rejected.match(resultAction)) {
                // Можно добавить дополнительную обработку ошибок
                console.error('Login failed:', resultAction.payload)
            }
        } catch (err) {
            console.error('Login error:', err)
        }
    }, [LoginData, dispatch, navigate])

    return (
        <>
            <Navbar/>
            <Container className="d-flex justify-content-center align-items-center mt-5 ">
            <div className="card border-0" style={{width: '100%', maxWidth: '550px'}}>
            <div className="card-body ">
                <h5 className="card-title text-center mb-4">Вход</h5>
                {error && <div className="alert alert-danger" role="alert">{error}</div>} {/* Отображение сообщения об ошибке */}
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
                            value={LoginData.username}
                            onChange={handleLoginChange}
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
                            value={LoginData.password}
                            onChange={handleLoginChange}
                            required
                        />
                    </div>
                    <button type="button" className="btn change_back_button w-100"
                    onClick={clickLogin}>
                        Войти
                    </button>
                </form>
            </div>
        </div>
            </Container>
        </>
    );
};