import {FC} from "react";
import {CargoInShippingProps} from "./typing.tsx";
import unknownImage from "/images/noimage.webp"
import {Link} from "react-router-dom";
export const CargoInRequestCard: FC<CargoInShippingProps> = (cargo: CargoInShippingProps) => {
    return (
        <div className="card mb-3 border border-dark rounded-0">
            <div className="row g-0">
                <div className="col-md-2">
                    <div className="card-body">
                        <img
                            src={cargo.logo_file_path ? (cargo.logo_file_path) : (unknownImage)}
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
                                to={"/cargo/" + cargo.id }
                                id={cargo.title}
                                className="text-black text-decoration-none"
                                state={{from: cargo.title}}
                            >
                                {cargo.title}
                            </Link>
                        </h5>
                        <div className="mt-3">
                        <p className="card-text"><strong>${cargo.price_per_ton}/1т</strong></p>
                    </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card-body">
                        <p className="card-text"><strong> {cargo.amount}т</strong></p>
                    </div>
                </div>
                
                <div className="col-md-2">
                    <div className="card-body">
                        <p className="card-text"><strong> ${ cargo.price_of_card}</strong></p>
                    </div>
                </div>
            </div>

        </div>
    );
};