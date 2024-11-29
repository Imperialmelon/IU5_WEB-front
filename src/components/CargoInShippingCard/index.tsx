import {FC, useEffect, useState} from "react";
import {CargoInShippingProps} from "./typing.tsx";
import unknownImage from "/images/noimage.webp"
import {Link} from "react-router-dom";
import { api } from "../../core/api/index.ts";
import { ChangeEvent } from "../../App.typing.tsx";
import { store } from "../../core/store/index.ts";
import { useNavigate } from "react-router-dom";
let test

export const CargoInRequestCard: FC<CargoInShippingProps> = (cargo: CargoInShippingProps) => {
    const navigate = useNavigate()
    const [amount, setAmount] = useState<string>('')
    const [price_card , setPrice] = useState<string>(cargo.price_of_card)
    const changeAmount = (e : ChangeEvent) => {
        console.log(`value = ${e.target.value}`)
        console.log(`mod : ${e.target.value.toString()}`)
        const new_value = e.target.value
        test = (new_value)

        cargo.updateAmounts(cargo.id, e.target.value)
        setAmount(test)
        console.log(`new amount = ${amount}`)
        setPrice(String(Number(test) * Number(cargo.price_per_ton)))
        console.log(`after ${amount}`)
    }

    useEffect(() => {
        setAmount((cargo.amount))
    }, [])

    const deleteCLick = () => {
        api.shippingCargo.shippingCargoDeleteDelete(cargo.id.toString()  || "", cargo.shipping_id )
        .then(() => {
            console.log('deleted cargo')
            cargo.clickDelete(cargo.id || 0)
        })
        .catch(() => {
            console.log('failed to delete cargo')
        })
    }

    return (
    
        <div className="card mb-3 border border-dark rounded-0">
      <div className="row g-0">
        <div className="col-md-2">
          <div className="card-body">
            <img
              src={cargo.logo_file_path ? cargo.logo_file_path : unknownImage}
              className="img-fluid rounded-start"
              alt={cargo.title}
              width="100px"
            />
          </div>
        </div>
        <div className="col-md-5">
          <div className="card-body">
            <h5 className="card-title">
              <Link
                to={"/cargo/" + cargo.id}
                id={cargo.title}
                className="text-black text-decoration-none"
                state={{ from: cargo.title }}
              >
                {cargo.title}
              </Link>
            </h5>
            <div className="mt-3">
              <p className="card-text">
                <strong>${cargo.price_per_ton}/1т</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          {cargo.isEditable ? (
            <div className="mt-3 d-flex align-items-center">
              <input
                type="text"
                className="input form-control"
                aria-label={cargo.id?.toString()}
                value={amount}
                onChange={changeAmount}
              />
              <span className="ms-2">т</span>
            </div>
          ) : (
            <div className="mt-3">
              <p className="card-text">
                <strong>{cargo.amount}т</strong>
              </p>
            </div>
          )}
        </div>
        <div className="col-md-2">
          <div className="card-body">
            <p className="card-text">
              <strong>${price_card}</strong>
            </p>
          </div>
        </div>
        {cargo.isEditable && (
          <button type="button" className="btn-close mt-1" aria-label="Close" onClick={deleteCLick} />
        )}
      </div>
    </div>
    );
};