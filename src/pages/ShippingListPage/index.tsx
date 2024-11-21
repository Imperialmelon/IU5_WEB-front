import "./ShippingListPage.css"
import {FC} from "react";
import { TableFilters } from "../../components/TableFilters";
import { ShippingsTable } from "../../components/ShippingsTable";
import { useShippingListPage } from "./useShippingListPage";
import { Container } from "react-bootstrap";

import {Navbar} from "../../components/Navbar";
import {Link} from "react-router-dom";



export const ShippingListPage: FC  = () => {
   const {TableState, filterProps} = useShippingListPage()
    
    return (
        <>
            <Navbar/>
            <Container className="mt-4">
            <h3>Отправления</h3>
            <TableFilters {...filterProps}></TableFilters>

                <ShippingsTable {...TableState}></ShippingsTable>
            </Container>
        </>
    );
};