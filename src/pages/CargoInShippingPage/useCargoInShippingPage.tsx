import "./CargoInShippingPage.css"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { api } from "../../core/api"
import { ShippingWithInfo, Related } from "../../core/api/Api"
import { ShippingRequestMock } from "../../core/mock/CargoInShippingMock"
import { ChangeEvent } from "../../App.typing"
import { ShippingCargos } from "../../core/api/Api"
import { store } from "../../core/store"
import axios from "axios"
import { Cargo } from "../../core/api/Api"

export const useCargoInShippingPage = () => {
    const {id} = useParams();
    const [Organization , setOrg] = useState<string>('')
    const [amounts , setAmounts] = useState<{[key : string] : string}>({}) 
    const [ShippingContentData, setShippingData] = useState<ShippingWithInfo>();
    const navigate = useNavigate()
    const [total_price, setTotalPrice] = useState<string>(() => {
        let sum = 0
        Object.entries(amounts).forEach(([key, value]) => {
            api.cargo.cargoRead(key).then((data) => {
                sum += data.data.price_per_ton * Number(value)
            })
            .catch(() => {})
        }
    )
        return String(sum)
    }
)
    const [Allow_Edit, setAllow_Edit] = useState<boolean>(true)


    const handleClickDeleteCargo = (key : number) =>{
        
        // setAmounts(prevAmounts => {
        //     const updatedAmounts = {...prevAmounts}
        //     delete updatedAmounts[key]
        //     return updatedAmounts
        // })

        updAmounts(key, '0')
        updPage()
    }

    const updAmounts = (key : number, amount : string) => {
        amounts[key] = amount
        let sum = 0
        setAmounts(amounts)
        const data : ShippingCargos  = {
            shipping : Number(id),
            cargo : Number(key), 
            amount : Number(amounts[key])
        }
        api.shippingCargo.shippingCargoChangeUpdate(key.toString() ,id || "", data)
        .then(() => {console.log('good')})
        .catch(() => {
            console.log('bad')
        })
        console.log(amounts)
        Object.entries(amounts).forEach(([key, value]) => {
  
            api.cargo.cargoRead(key).then((data) => {
                console.log(`data: ${data.data.price_per_ton}`)
                sum += data.data.price_per_ton * Number(value)
                console.log(sum)
                setTotalPrice(sum.toString())
            })
            .catch(() => {})
            console.log(`price : ${sum}`)

           });
  
    }

    const updPage = () => {
        if (id) {
            api.shipping.shippingRead(id)
            .then((data) => {
                setShippingData(data.data)
                if (data.data?.status != 'DRAFT') {
                    setAllow_Edit(false)
                }
                setOrg(data.data.organization)
                data.data.cargo_list.forEach((cargo : Related) => {
                    updAmounts(cargo.cargo.pk || 0, cargo.amount.toString())
                })
            })
            .catch(() =>{
                setShippingData(ShippingRequestMock)
            })
        }
    }


    useEffect(updPage, [])


    const handleChangeOrg = (e : ChangeEvent) => {
        setOrg(e.target.value)
    }

    const handleClearClick = () => {
        api.shipping.shippingDeleteDelete(id || "")
        .then(() => {
            navigate('/cargo_catalog')
        })
        .catch(() =>{
            console.log('error')
        })
    }

    const handleFormClick = () => {

        api.shipping.shippingFormUpdate(id || "")
        .then(() => {
            console.log('/cargo_catalog')
            navigate('/cargo_catalog')
        })
        .catch(() => {
            console.log('not formed')
        })
    }
    
    return {
        ShippingContentData,
        id,
        Allow_Edit,
        amounts,
        total_price,
        Organization,
        updAmounts,
        handleClearClick,
        handleClickDeleteCargo,
        handleChangeOrg,
        handleFormClick,
    }

}




