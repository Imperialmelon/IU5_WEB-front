import { useEffect, useState } from "react";
import {Cargo} from "../../core/api/cargo_getters/typing.ts";
// import { useLocation, useNavigate } from "react-router-dom";
// import { IPlanet } from "../../core/api/planets/typing";
import {getCargoList} from "../../core/api/cargo_getters/index.ts";
import { ChangeEvent } from "../../App.typing.tsx";
import { CargoList_ } from "../../core/mock/CargoList.ts";


export const useSoftwareCatalogPage = () => {
    const [CargoList, setCargoList] = useState<Cargo[]>([]);
    const [CargoName, setSearchCargoName] = useState("");

    const handleSearchCargoClick = () => {
        getCargoList(CargoName)
            .then((data) => {
                alert('then')
                setCargoList(data.cargoes);
            })
            .catch(() => {
                alert('catch')
                const filteredPlanets = CargoList_.filter((cargo) =>
                    cargo.title.toLowerCase().startsWith(CargoName.toLowerCase())
                );
                setCargoList(filteredPlanets);
            });
    };
    const handleSearchNameChange = (e: ChangeEvent) => {
        setSearchCargoName(e.target.value);
    };
    useEffect(() => {

        getCargoList()
        .then((data) => {
            console.log(1)
            setCargoList(data.cargoes);
        })
        .catch(() => {
            setCargoList(CargoList_);
        });

    }, []);
    return {
        CargoList,
        handleSearchCargoClick,
        handleSearchNameChange,
    };
};