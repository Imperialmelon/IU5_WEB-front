import "./CargoCatalogPage.css";
import {FC} from "react";
import { CargoCatalogPageProps } from "./typing.tsx";
import {Navbar} from "../../components/Navbar/index.tsx";
import {Container, Button} from "react-bootstrap";
import {CargoCard} from "../../components/CargoCart/index.tsx";
import empty_cart_image from '/images/box.svg'
import {Breadcrumbs} from "../../components/Breadcrumbs/index.tsx";
import search_image from '/images/search.svg'
import {useSoftwareCatalogPage} from "./useCargoCatalogPage.tsx";
import { CargoCardProps } from "../../components/CargoCart/typing.tsx";
export const CargoCatalogPage: FC<CargoCatalogPageProps> = () => {
    
    const {
        CargoList,
        handleSearchCargoClick,
        handleSearchNameChange,
    } = useSoftwareCatalogPage();

    return (
        <>
            <Navbar/>
            <Breadcrumbs
                    endItem="Каталог"
                />
            <Container>

                <form className="d-flex mt-4 mb-4 flex-grow-1">
                    <div style={{width : "30%"}}></div>
                    <div className="d-flex flex-grow-1 justify-content-between">
                    <div className="d-flex">
                        <div className="d-flex" style={{width : "400px"}}>
                            <input
                                className="input form-control"
                                onChange={handleSearchNameChange}
                                placeholder="Поиск"
                                aria-label="Поиск"
                                // name="software_title"
                                type="text"
                            />
                        </div>

                    <div className="px-3">

                    <Button
                        onClick={handleSearchCargoClick}
                        className="btn bg-white text-dark border-dark"
                                                                >
                        Найти &nbsp;   
                        <img src= {search_image} width="25" alt="cart"  />
                
                    </Button>
                    </div>
                    </div>
                    <div>
                        <a href={`/request/1`} className="btn dark-blue-border">
                            <img src={empty_cart_image} width="25" alt="cart"/>
                        </a>
                    </div>
                    </div>
                </form>
                {CargoList && !!CargoList.length ? (
                    <div className="row row-cols-1 row-cols-md-2
                    row-cols-lg-3 g-4">
                                            {CargoList.map((cargo, ind) => {
                            const props: CargoCardProps = {
                                id: cargo.pk,
                                title: cargo.title,
                                short_descr: cargo.description,
                                price_per_ton: cargo.price_per_ton,
                                logo_file_path: cargo.logo_file_path,
                            };
                            return (
                                <div className="col">
                                    <CargoCard key={ind} {...props} />
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
    
