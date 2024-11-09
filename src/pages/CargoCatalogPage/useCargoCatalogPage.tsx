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
    const [price_filter, setPriceFilter] = useState("");
    const [cnt , setCnt] = useState<Number | null> (null);


    const handleSearchCargoClick = () => {
        getCargoList(CargoName,Number(price_filter))
            .then((data) => {

                setCargoList(data.cargoes);
                setCnt(data.cnt);
            })
            .catch(() => {
                const filteredcargos = CargoList_.filter((cargo) =>
                    cargo.title.toLowerCase().startsWith(CargoName.toLowerCase())
                )
                setCargoList(filteredcargos);
                setCnt(null)
            });
    };
    
    const handleSearchNameChange = (e: ChangeEvent) => {
        setSearchCargoName(e.target.value);
    };

    const handleSetFilterClick = () => {

        getCargoList(CargoName, Number(price_filter))
            .then((data) => {
                setCargoList(data.cargoes)

        }
        )
        .catch(() =>{

            const filteredcargos = CargoList_.filter((cargo) =>
                {
                    return cargo.price_per_ton >= Number(price_filter);
                }
            )

                setCargoList(filteredcargos)
        }
    )
    }


    const handlePriceFilter = (e : ChangeEvent) => {
        setPriceFilter(e.target.value)
    }

    useEffect(() => {

        getCargoList()
        .then((data) => {
            setCargoList(data.cargoes);
            setCnt(data.cnt)
        })
        .catch(() => {
            setCargoList(CargoList_);
            setCnt(null)
        });

    }, []);
    return {
        CargoList,
        handleSearchCargoClick,
        handleSearchNameChange,
        handleSetFilterClick,
        handlePriceFilter,
        cnt

    };
};