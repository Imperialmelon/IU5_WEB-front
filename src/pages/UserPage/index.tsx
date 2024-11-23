import "./UserPage.css";
import {FC, useState} from "react";
import {Container} from "react-bootstrap";
import {Navbar} from "../../components/Navbar";
import { api } from "../../core/api";
import { UserAccountData } from "./typing";
import { ChangeEvent } from "../../App.typing";
import { selectUser } from "../../core/store/slices/selector";
import { useDispatch, useSelector } from "react-redux";
import { saveUser } from "../../core/store/slices/userSlice";


export const UserPage: FC = () => {
    const {username, Is_Auth} = useSelector(selectUser)
    const user_name = username
    const [UserData, setUserData] = useState<UserAccountData>({
        username : user_name,
        email : undefined,
        password : undefined
    })
    const dispath = useDispatch()


    const handleChangeData = (e : ChangeEvent) => {
        const {id, value} = e.target
        const yy = UserData
        setUserData((prevState) => ({...prevState, [id]: value}))

            

    }

    const handleUpdateData = () =>{
        console.log(UserData)
        api.user.userUpdateUpdate(UserData)
        .then(() => {
            console.log('updated')
        })
        .catch(() => {
            console.log('not updated')
        })
    }

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
                            E-mail
                        </label>
                        <input
                            type="text"
                            id="email"
                            className="form-control border border-dark rounded-0"
                            placeholder="Введите новый e-mail"
                            onChange={handleChangeData}
                            value={UserData.email}
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
                            onChange={handleChangeData}
                            value={UserData.password}
                        />
                    </div>
                    <button type="button" onClick={handleUpdateData} className="btn change_back_button w-100">
                        Изменить
                    </button>
                </form>
            </div>
            </div>
            </Container>
        </>
    );
};