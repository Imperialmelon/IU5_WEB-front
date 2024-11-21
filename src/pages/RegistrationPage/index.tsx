import "./RegistrationPage.css";
import {FC, useState} from "react";
import {Container} from "react-bootstrap";
import {Navbar} from "../../components/Navbar";
import { RegDataProps } from "./typing";
import { useNavigate } from "react-router-dom";
import { ChangeEvent } from "../../App.typing";
import { api } from "../../core/api";
export const RegistrationPage: FC = () => {
    const navigate = useNavigate()
    const [RegData, setRegData] = useState<RegDataProps>({
        username : "",
        email : "",
        password : ""
    })
    const [FailedReg, setFailedReg] = useState<string>('')
    
    const handleRegChange = (e : ChangeEvent) =>{
        const event = e.target
        const {value, id} = event
        setRegData(prevData => ({
            ...prevData,
            [id]: value
        }));
    }


    const clickReg = () => {
        if (RegData.username && RegData.password){
            api.user.userCreateCreate(RegData).then(
                (data) => {
                    navigate('/login')
                }
            )
            .catch((data) => {
                setFailedReg(data)
            })
        }
    }
    return (
        <>
            <Navbar/>
            <Container className="d-flex justify-content-center align-items-center mt-5">
            <div className="card border-0" style={{width: '100%', maxWidth: '550px'}}>
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
                            onChange={handleRegChange}
                            value={RegData.username}
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
                            onChange={handleRegChange}
                            value={RegData.email}
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
                            onChange={handleRegChange}
                            value={RegData.password}
                            required
                        />
                    </div>
                    <button type="button" className="btn w-100 change_back_button"
                    onClick={clickReg}>
                        Зарегистрироваться
                    </button>
                    {FailedReg == '' ? <span>{FailedReg}</span> : ''}
                </form>
            </div>
        </div>
            </Container>
        </>
    );
};