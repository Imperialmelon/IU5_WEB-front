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
import {useSoftwareCatalogPage} from "./useCargoCatalogPage.tsx";
import { CargoCardProps } from "../../components/CargoCart/typing.tsx";
export const CargoCatalogPage: FC<CargoCatalogPageProps> = () => {
    
    const {
        CargoList,
        handleSearchCargoClick,
        handleSearchNameChange,
        handleSetFilterClick,
        handlePriceFilter,
        cnt,
        Cargo_name,
        price_filter,
    } = useSoftwareCatalogPage();

    return (
        <>
        <Navbar/>
        <Container className="d-flex flex-row justify-content-between">
            <Breadcrumbs endItem="Каталог"/>
            <div className="mt-4 mb-4">
                <a href={`/request/1`} className="btn border-dark"> 
                    <div className="d-flex gap-1">
                        <span className="ms-2">{Number(cnt)}</span>
                        {Number(cnt) != 0 ? (
                            <img src={filled_cart} width="25" alt="cart"/>
                        ) : <img src={empty_cart_image} width="25" alt="cart"/>
                        }    
                    </div>
                </a>
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
    
            {CargoList && !!CargoList.length ? (
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 w-100">
                    {CargoList.map((cargo, ind) => {
                        const props: CargoCardProps = {
                            id: cargo.pk,
                            title: cargo.title,
                            short_descr: cargo.description,
                            price_per_ton: cargo.price_per_ton,
                            logo_file_path: cargo.logo_file_path,
                        };
                        return (
                            <div className="col" key={ind}>
                                <CargoCard {...props} />
                            </div>
                        );
                    })}
                </div>
            ) : (
                <Container className="d-flex justify-content-center mt-4 mb-5">
                    <h2>Ничего не найдено</h2>
                </Container>
            )}
            </Container>
        </>
        );
    }
        