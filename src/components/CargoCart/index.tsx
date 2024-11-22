import {FC} from "react";
import "./cart_elem.css"
import unknownImage from "/images/noimage.webp"
import {Link} from "react-router-dom";
import { CargoCardProps } from "./typing";
import { store } from "../../core/store";
import { useSelector, UseSelector } from "react-redux";
import { api } from "../../core/api";
import { selectUser } from "../../core/store/slices/selector";
export const CargoCard: FC<CargoCardProps> = (cargo : CargoCardProps) => {
    const {Is_Auth} = useSelector(selectUser)


    const clickAddCargo = () => {
        api.cargo.cargoAddToShippingCreate(cargo.id.toString())
        .then((data) =>{
            console.log(data)
            cargo.updateCatalogPage()

        })
        .catch(() => {
            console.log('error')})
    }


    return (
        <div className="card border border-dark rounded-0 h-100  " style={{width : "100%", paddingLeft : "10px", paddingRight : "10px"}}>
            <img
                src = {cargo.logo_file_path ? (cargo.logo_file_path) : (unknownImage)}

                className="card-img-top software-card-img "
                alt={cargo.title}
            />
            <div className="card-body ">
                <h5 className="card-title roboto_font">{cargo.title}</h5>
                <p className="card-text">{cargo.short_descr}</p>
            </div>
            <ul className="list-group list-group-flush border-0" >
                <li className="list-group-item roboto_font">
                Цена за 1т: <strong>{cargo.price_per_ton}$</strong>
                </li>
                
            </ul>
            <div className="card-body d-flex justify-content-between ">
                {Is_Auth ? 
                <button className="btn  mx-auto rounded-0 btn_add "
                onClick={clickAddCargo}>Добавить в отправление</button>
                : <></>
                }

                    
                <Link
                    to={'/cargo/' + cargo.id}
                    id = {cargo.title}
                    className="btn  mx-auto rounded-0 btn_det"
                    state = {{from : cargo.title}}
                    >
                    Подробнее
                    </Link>
                
            </div>
        </div>
    );
};