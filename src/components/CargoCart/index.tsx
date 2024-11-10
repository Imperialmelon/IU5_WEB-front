import {FC} from "react";
import "./cart_elem.css"
import unknownImage from "/images/noimage.webp"
import {Link} from "react-router-dom";

import { CargoCardProps } from "./typing";
export const CargoCard: FC<CargoCardProps> = (cargo : CargoCardProps) => {
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
                <a href={`/cargo/${cargo.id}/add`} className="btn mx-auto btn_add rounded-0">
                    Добавить в отправление
                </a>
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