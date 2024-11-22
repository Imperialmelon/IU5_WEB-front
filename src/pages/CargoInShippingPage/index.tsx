import "./CargoInShippingPage.css"
import { FC } from "react"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import { Navbar } from "../../components/Navbar"
import { Container } from "react-bootstrap"
// import { getCargo } from "../../core/api/cargo_getters"
import { ShippingRequestByIdResponse } from "../../core/api/cargo_getters/typing"
import { CargoInShippingItem } from "../../core/api/cargo_getters/typing"
import { CargoInShippingProps } from "../../components/CargoInShippingCard/typing"
import { CargoInRequestCard } from "../../components/CargoInShippingCard"
import { Breadcrumbs } from "../../components/Breadcrumbs"
// import { getShippingById } from "../../core/api/cargo_getters"
import { api } from "../../core/api"
import { ShippingWithInfo, Related } from "../../core/api/Api"
import { ShippingRequestMock } from "../../core/mock/CargoInShippingMock"
import { useCargoInShippingPage } from "./useCargoInShippingPage"



function calculateTotalPrice(Cargos? : (Related | undefined)[]) : number {
    return Cargos?.reduce((total, item) => {
        if (item){
            return total + item.cargo.price_per_ton * item.amount
            }
            return total
        }, 0) || 0
    }


    export const ShippingPage: FC = () => {
        const {
            ShippingContentData,
            id,
            Allow_Edit,
            total_price,
            amounts,
            Organization,
            updAmounts,
            handleClearClick,
            handleClickDeleteCargo,
            handleChangeOrg,
            handleFormClick,
        } = useCargoInShippingPage()
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
                    <div className="mb-3 mt-3 border border-dark p-2 w-100" style={{display : "inline-block"}}>
                        {/* <div className="card-body"> */}
                            <h5 className="card-title">
                                Организация-заказчик: {
                                    Allow_Edit ? 
                                    <input
                                    type="text"
                                    className="input form-control"
                                    aria-label="org"
                                    value={Organization}
                                    onChange={handleChangeOrg}
                                    />
                                    :
                                    <input
                                    type="text"
                                    className="input form-control"
                                    aria-label="org"
                                    value={Organization}
                                    readOnly
                                    />
                                }
                            </h5>
                        {/* </div> */}
                    </div>
                    {ShippingContentData?.cargo_list && !!ShippingContentData.cargo_list.length ? (
                        <>
                            {ShippingContentData.cargo_list.map((cargo : Related, index : number) => {
                                const props: CargoInShippingProps = {
                                    id: Number(cargo.cargo.pk),
                                    title: cargo.cargo.title,
                                    price_per_ton: String(cargo.cargo.price_per_ton),
                                    logo_file_path: cargo.cargo.logo_file_path,
                                    amount : String(cargo.amount),
                                    price_of_card : String(cargo.cargo.price_per_ton * cargo.amount),
                                    shipping_id : id || "",
                                    isEditable : Allow_Edit,
                                    clickDelete : handleClickDeleteCargo,
                                    updateAmounts : updAmounts
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
                        {Allow_Edit ? 

                    <div className="d-flex justify-content-end ">
                    <button type="button" onClick={handleFormClick} className="btn change_back_button h-100 ">Оформить отправление</button>
                    <button type="button" onClick={handleClearClick} className="btn change_back_button h-100 ">Расформировать отправление</button>
                </div>
                : <></>
                }
                    <div className=" mb-3 mt-0" style={{float : "right"}}>
                                    <h5  style={{fontWeight : "bold"}}>
                                        Всего: ${total_price}
                                    </h5>
                    </div>
                    </div>
                                    
                </Container>
            </>
        );
    };