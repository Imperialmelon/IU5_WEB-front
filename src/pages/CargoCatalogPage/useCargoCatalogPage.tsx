import { useEffect, useState } from "react";
import {Cargo} from "../../core/api/cargo_getters/typing.ts";
// import { useLocation, useNavigate } from "react-router-dom";
// import { IPlanet } from "../../core/api/planets/typing";
import {getCargoList} from "../../core/api/cargo_getters/index.ts";
import { ChangeEvent } from "../../App.typing.tsx";
import { CargoList_ } from "../../core/mock/CargoList.ts";
import {selectApp} from "../../core/store/slices/selector";
import { useSelector, useDispatch } from "react-redux";
import {setCargoName} from "../../core/store/slices/appSlice.ts";
import {setPriceFilter} from "../../core/store/slices/appSlice.ts";


export const useCargoCatalogPage = () => {
    const [CargoList, setCargoList] = useState<Cargo[]>([]);
    const [ShippingID, setShippingID] = useState<Number>(0)
    // const [CargoName, setSearchCargoName] = useState("");
    // const [price_filter, setPriceFilter] = useState("");
    const [ItemsInCart , setItemsInCart] = useState<Number | null> (null);
    const {Cargo_name, price_filter} = useSelector(selectApp);
    const dispatch = useDispatch();
    // const Shipping_ID = 0 
    // const CargosInCart = 0



    const handleSearchCargoClick = () => {
        getCargoList(Cargo_name,Number(price_filter))
            .then((data) => {

                setCargoList(data.cargoes);
                setItemsInCart(data.cnt);
                setShippingID(data.shipping_id)
            })
            .catch(() => {
                const filteredcargos = CargoList_.filter((cargo) =>
                    cargo.title.toLowerCase().startsWith(Cargo_name.toLowerCase())
                )
                setCargoList(filteredcargos);
                setItemsInCart(null)
                setShippingID(0)
            });
    };
    
    const handleSearchNameChange = (e: ChangeEvent) => {
        // setSearchCargoName(e.target.value);
        dispatch(setCargoName(e.target.value))
    };

    const handleSetFilterClick = () => {

        getCargoList(Cargo_name, Number(price_filter))
            .then((data) => {
                setCargoList(data.cargoes)
                setShippingID(data.shipping_id)

        }
        )
        .catch(() =>{

            const filteredcargos = CargoList_.filter((cargo) =>
                {
                    return cargo.price_per_ton >= Number(price_filter);
                }
            )

                setCargoList(filteredcargos)
                setShippingID(0)
        }
    )
    }


    const handlePriceFilter = (e : ChangeEvent) => {
        dispatch(setPriceFilter(e.target.value))

    }

    useEffect(() => {

        getCargoList(Cargo_name, Number(price_filter))
        .then((data) => {
            setCargoList(data.cargoes);
            setItemsInCart(data.cnt)
            setShippingID(data.shipping_id)
        })
        .catch(() => {
            setCargoList(CargoList_);
            setItemsInCart(null)
            setShippingID(0)
        });

    }, []);
    return {
        CargoList,
        handleSearchCargoClick,
        handleSearchNameChange,
        handleSetFilterClick,
        handlePriceFilter,
        Cargo_name,
        ItemsInCart,
        price_filter,
        ShippingID

    };
};