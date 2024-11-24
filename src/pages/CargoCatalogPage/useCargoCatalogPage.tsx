import { useEffect, useState } from "react";
import { ChangeEvent } from "../../App.typing.tsx";
import { CargoList_ } from "../../core/mock/CargoList.ts";
import {selectApp} from "../../core/store/slices/selector";
import { useSelector, useDispatch } from "react-redux";
import {setCargoName} from "../../core/store/slices/appSlice.ts";
import {setPriceFilter} from "../../core/store/slices/appSlice.ts";
import { api } from "../../core/api"
import { setShippingData } from "../../core/store/slices/appSlice.ts";
import { Cargo } from "../../core/api/Api.ts";

export const useCargoCatalogPage = () => {
    const [IsActive, setIsActive] = useState<boolean>(false)
    const [CargoList, setCargoList] = useState<Cargo[]>([]);
    // const [ShippingID, setShippingID] = useState<Number>(0)
    // const [CargoName, setSearchCargoName] = useState("");
    // const [price_filter, setPriceFilter] = useState("");
    const [ItemsInCart , setItemsInCart] = useState<Number | null> (null);
    const {Cargo_name, price_filter, Shipping_id} = useSelector(selectApp);
    const dispatch = useDispatch();
    // const Shipping_ID = 0 
    // const CargosInCart = 0



    const handleSearchCargoClick = () => {
        console.log('started')
        setIsActive(false)
        // getCargoList(Cargo_name,Number(price_filter))
        api.cargoes.cargoesList({cargo_name : Cargo_name })
            .then((data) => {
                console.log('good')
                // setCargoList(data.cargoes);
                setCargoList(data.data.cargo)
                setItemsInCart(data.data.items_in_cart);
                setIsActive(true)
                // setShippingID(Number(data.data.shipping_id))
                dispatch(setShippingData(Number(data.data.shipping_id)))
            })
            .catch(() => {
                console.log('bad')
                const filteredcargos = CargoList_.filter((cargo) =>
                    cargo.title.toLowerCase().startsWith(Cargo_name.toLowerCase())
                )
                setCargoList(filteredcargos);
                setIsActive(true)
                setItemsInCart(null)
                // setShippingID(0)
                dispatch(setShippingData(0))
            });
    };
    



    const handleSearchNameChange = (e: ChangeEvent) => {
        // setSearchCargoName(e.target.value);
        dispatch(setCargoName(e.target.value))
    };

    const handleSetFilterClick = () => {

        api.cargoes.cargoesList({cargo_name : Cargo_name, min_price : (price_filter)})
            .then((data) => {
                setCargoList(data.data.cargo)
                // setShippingID(Number(data.data.shipping_id))
                dispatch(setShippingData(Number(data.data.shipping_id)))

        }
        )
        .catch(() =>{

            const filteredcargos = CargoList_.filter((cargo) =>
                {
                    return cargo.price_per_ton >= Number(price_filter);
                }
            )

                setCargoList(filteredcargos)
                // setShippingID(0)
                dispatch(setShippingData(0))
        }
    )
    }


    const handlePriceFilter = (e : ChangeEvent) => {
        if (e.target.value == ''){
            e.target.value = '0'
        }
        dispatch(setPriceFilter(e.target.value))

    }

    useEffect(handleSearchCargoClick, []);
    return {
        CargoList,
        handleSearchCargoClick,
        handleSearchNameChange,
        handleSetFilterClick,
        handlePriceFilter,
        updateCatalogPage : handleSearchCargoClick,
        Cargo_name,
        ItemsInCart,
        price_filter,
        Shipping_id,
        IsActive

    };
};