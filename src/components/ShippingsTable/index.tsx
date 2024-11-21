import { FC } from "react";
import { TableProps } from "./typing";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ShippingsTable : FC  <TableProps> = (props : TableProps) =>{
    return(
        <Table striped bordered hover>
                    <thead>
                        <th>N</th>
                        <th>Статус</th>
                        <th>Дата создания</th>
                        <th>Дата оформления</th>
                        <th>Дата завершения</th>
                        <th>Итоговая стоимость</th>
                    </thead>
                    <tbody>
            {props.data.map((shipping) => (
                <tr key={shipping.number}>
                    <td>
                        <Link
                            to={"/shipping/" + shipping.number}
                            className="text-black"
                        >
                            {shipping.number}
                        </Link>
                    </td>
                    <td>{shipping.status}</td>
                    <td>{shipping.creationDate}</td>
                    <td>{shipping.formDate}</td>
                    <td>{shipping.completitionDate}</td>
                    <td>{shipping.total_price}</td>
                </tr>
            ))}
            </tbody>
                </Table>
    )
}