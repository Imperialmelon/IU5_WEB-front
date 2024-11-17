import "./CargoInShippingPage.css"
import { FC } from "react"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import { Navbar } from "../../components/Navbar"
import { Container } from "react-bootstrap"
import { getCargo } from "../../core/api/cargo_getters"
import { ShippingRequestByIdResponse } from "../../core/api/cargo_getters/typing"
import { CargoInShippingItem } from "../../core/api/cargo_getters/typing"
import { CargoInShippingProps } from "../../components/CargoInShippingCard/typing"
import { CargoInRequestCard } from "../../components/CargoInShippingCard"
import { Breadcrumbs } from "../../components/Breadcrumbs"
import { getShippingById } from "../../core/api/cargo_getters"


function calculateTotalPrice(Cargos? : (CargoInShippingItem | undefined)[]) : number {
    return Cargos?.reduce((total, item) => {
        if (item){
            return total + item.price_per_ton * item.amount
            }
            return total
        }, 0) || 0
    }


    export const ShippingPage: FC = () => {
        const {id} = useParams();
        const [ShippingContentData, setShippingData] = useState<ShippingRequestByIdResponse>();
        useEffect(() => {
            if (id) {
                getShippingById(id)
                    .then((data) => {
                        setShippingData(data);
                    })
                    .catch(() => {
                        setShippingData(undefined)
                    });
            }
        }, [id]);
        return (
            <>
                <Navbar/>
                <Container>
                    <Breadcrumbs
                        middleItems={[
                            {
                                name: "Каталог",
                                link: "/cargo_catalog"
                            }
                        ]}
                        endItem={"Отправление № " + ShippingContentData?.pk}
                    />
                    <div className="mb-3 mt-3 border border-dark p-2" style={{display : "inline-block"}}>
                        {/* <div className="card-body"> */}
                            <h5 className="card-title">
                                Организация-заказчик: <strong>{ShippingContentData?.organization}</strong>
                            </h5>
                        {/* </div> */}
                    </div>
                    {ShippingContentData?.cargo_list && !!ShippingContentData.cargo_list.length ? (
                        <>
                            {ShippingContentData.cargo_list.map((cargo, index) => {
                                const props: CargoInShippingProps = {
                                    id: cargo.pk,
                                    title: cargo.title,
                                    price_per_ton: String(cargo.price_per_ton),
                                    logo_file_path: cargo.logo_file_path,
                                    amount : String(cargo.amount),
                                    price_of_card : String(cargo.price_per_ton * cargo.amount)
                                };
                                return (
                                    <CargoInRequestCard key={index} {...props} />
                                );
                            })}
                        </>
                    ) : (
                        <></>
                    )}
                    <div className="d-flex flex-row justify-content-between">

                    <div className="d-flex justify-content-end ">
                    <button type="button" className="btn change_back_button h-100 ">Оформить отправление</button>
                </div>
                    <div className=" mb-3 mt-0" style={{float : "right"}}>
                                    <h5  style={{fontWeight : "bold"}}>
                                        Всего: ${calculateTotalPrice(ShippingContentData?.cargo_list)}
                                    </h5>
                    </div>
                    </div>
                                    
                </Container>
            </>
        );
    };