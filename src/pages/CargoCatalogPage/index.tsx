import "./CargoCatalogPage.css";
import {FC} from "react";
import { CargoCatalogPageProps } from "./typing.tsx";
import {Navbar} from "../../components/Navbar/index.tsx";
import {Container, Button} from "react-bootstrap";
import {CargoCard} from "../../components/CargoCart/index.tsx";
import empty_cart_image from '/images/box.svg'
import {Breadcrumbs} from "../../components/Breadcrumbs/index.tsx";
import search_image from '/images/search.svg'
import filled_cart from '/images/box-fill.svg'
import {useCargoCatalogPage} from "./useCargoCatalogPage.tsx";
import { CargoCardProps } from "../../components/CargoCart/typing.tsx";
import { Link } from "react-router-dom";
import { Animation } from "../../components/Animation/index.tsx";
import { HashLoader } from "react-spinners";

export const CargoCatalogPage: FC<CargoCatalogPageProps> = () => {
    
    const {
        CargoList,
        updateCatalogPage,
        handleSearchCargoClick,
        handleSearchNameChange,
        handleSetFilterClick,
        handlePriceFilter,
        ItemsInCart,
        Cargo_name,
        price_filter,
        Shipping_id,
        IsActive,
    } = useCargoCatalogPage();

    return (
        <>
        <Navbar/>
        <Container className="d-flex flex-row justify-content-between">
            <Breadcrumbs endItem="Каталог"/>
            <div className="mt-4 mb-4">
                <Link to={`/shipping/${Shipping_id}/`} style={{textDecorationLine : "None"}}
                className={Shipping_id !=0 ? "" : "disabled disable" }
                >
                <Button 
                className="d-flex gap-1 tn bg-white text-dark border-dark align-items-center "
                >
                        <span className="ms-2">{Number(ItemsInCart)}</span>
                        {Number(ItemsInCart) != 0 ? (
                            <img src={filled_cart} width="25" alt="cart"/>
                        ) : <img src={empty_cart_image} width="25" alt="cart"/>
                        }    
                    </Button>

                </Link>
            </div>
        </Container>
        
        <Container className="p-0">
            <div className="d-flex flex-column flex-md-row justify-content-center gap-3 mb-4">
                {/* Search Section */}
                <div className="d-flex flex-row col-12 col-md-auto gap-2">
                    <div className="flex-grow-1">
                        <input
                            className="form-control"
                            onChange={handleSearchNameChange}
                            placeholder="Поиск"
                            aria-label="Поиск"
                            type="text"
                            value={Cargo_name}
                        />
                    </div>
                    <div>
                        <Button
                            onClick={handleSearchCargoClick}
                            className="btn bg-white text-dark border-dark d-flex align-items-center">
                            Найти  
                            <img className="ms-2" src={search_image} width="25" alt="cart" />
                        </Button>
                    </div>
                </div>
    
                {/* Filter Section */}
                <div className="d-flex flex-row col-12 col-md-auto gap-2">
                    <div className="flex-grow-1">
                        <input
                            className="form-control"
                            onChange={handlePriceFilter}
                            placeholder="Фильтр"
                            aria-label="Фильтр"
                            type="text"
                            value={String(price_filter)}
                        />
                    </div>
                    <div>
                        <Button
                            onClick={handleSetFilterClick}
                            className="btn bg-white text-dark border-dark h-100">
                        </Button>
                    </div>
                </div>
            </div>
            {
                IsActive ? <>
                
            {CargoList && !!CargoList.length ? (
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 w-100">
                    {CargoList.map((cargo, ind) => {
                        const props: CargoCardProps = {
                            id: Number(cargo.pk),
                            title: cargo.title,
                            short_descr: cargo.description,
                            price_per_ton: cargo.price_per_ton,
                            logo_file_path: cargo.logo_file_path || '',
                            updateCatalogPage : handleSearchCargoClick
                        };
                        return (
                            <div className="col" key={ind}>
                                <CargoCard {...props} />
                            </div>
                        );
                    })}
                </div>
            ) :( <Container className="d-flex justify-content-center mt-4 mb-5">
            <h2>Ничего не найдено</h2>
        </Container>)}

                </>
                :  <>
                <div  >
                <HashLoader size={95} />
                </div>
                      
                    </>
            } 
    
          
            </Container>
        </>
        );
    }
        