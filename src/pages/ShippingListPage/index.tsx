import "./ShippingListPage.css"
import {FC} from "react";
import React, {useState} from 'react';
import {Card, Form, Table, Container} from 'react-bootstrap';

import {Navbar} from "../../components/Navbar";
import {Link} from "react-router-dom";
interface ShippingProps {
    number: number;
    status: string;
    creationDate: string;
    registrationDate: string;
    completionDate: string;
}
const TableCell : FC <{data : string | number}> = ({data}) => (
    <td>{data}</td>
)

const TableRow : FC <{shipping: ShippingProps}> = ({shipping}) =>(
    <tr>
        <TableCell data = {shipping.number}/>
        <TableCell data = {shipping.status}/>
        <TableCell data = {shipping.creationDate}/>
        <TableCell data = {shipping.registrationDate}/>
        <TableCell data = {shipping.completionDate}/>
    </tr>
)
const data: ShippingProps[] = [
    {
        number: 1,
        status: 'Активный',
        creationDate: '2024-01-10',
        registrationDate: '2024-01-15',
        completionDate: '2024-02-01',
    },
    {
        number: 2,
        status: 'Неактивный',
        creationDate: '2024-01-12',
        registrationDate: '2024-01-18',
        completionDate: '2024-02-10',
    },
    {
        number: 3,
        status: 'Ожидает',
        creationDate: '2024-02-05',
        registrationDate: '2024-02-10',
        completionDate: '2024-03-01',
    },
    {
        number: 4,
        status: 'Активный',
        creationDate: '2024-02-01',
        registrationDate: '2024-02-05',
        completionDate: '2024-02-20',
    },
    {
        number: 5,
        status: 'Неактивный',
        creationDate: '2024-01-20',
        registrationDate: '2024-01-22',
        completionDate: '2024-02-15',
    },
];


export const ShippingListPage: FC  = () => {
    const [status, setStatus] = useState<string>('');
    const [startDate, setStartDate] = useState<string>('');
    const [endDate, setEndDate] = useState<string>('');
  

    const handleStatusChange = (event : React.ChangeEvent<HTMLSelectElement>) =>{
        setStatus(event.target.value)
    }
    const handleStartDateChange = (event : React.ChangeEvent<HTMLInputElement>) =>{
        setStartDate(event.target.value)
    }
    const handleEndDateChange = (event : React.ChangeEvent<HTMLInputElement>) =>{
        setEndDate(event.target.value)
    }
    

    const data: ShippingProps[] = [
        {
            number: 1,
            status: 'В обработке',
            creationDate: '2024-01-10',
            registrationDate: '2024-01-15',
            completionDate: '2024-02-01',
        },
        {
            number: 2,
            status: 'Завершено',
            creationDate: '2024-01-12',
            registrationDate: '2024-01-18',
            completionDate: '2024-02-10',
        },
        {
            number: 3,
            status: 'Отклонено',
            creationDate: '2024-02-05',
            registrationDate: '2024-02-10',
            completionDate: '2024-03-01',
        },
        {
            number: 4,
            status: 'Отклонено',
            creationDate: '2024-02-01',
            registrationDate: '2024-02-05',
            completionDate: '2024-02-20',
        },
        {
            number: 5,
            status: 'Завершено',
            creationDate: '2024-01-20',
            registrationDate: '2024-01-22',
            completionDate: '2024-02-15',
        },
    ];
    
    return (
        <>
            <Navbar/>
            <Container className="mt-4">
            <h1 style={{fontSize : "25px"}}>Отправления</h1>
                <Card className="mb-3 border-0 p-0">
                    <Card.Body className="p-0">
                        <Form>
                            <div className="d-flex align-items-end justify-content-between">
                                <div className="flex-grow-1 pe-3">
                                    <Form.Group controlId="status">
                                        <Form.Label>Статус</Form.Label>
                                        <Form.Select value={status} onChange={handleStatusChange}>
                                            <option value="">Выберите статус</option>
                                            <option value="active">В обработке</option>
                                            <option value="inactive">Доставлено</option>
                                            <option value="pending">Отклонено</option>
                                        </Form.Select>
                                    </Form.Group>
                                </div>
                                <div className="flex-grow-1  pe-3">
                                    <Form.Group controlId="startDate">
                                        <Form.Label>Дата начала</Form.Label>
                                        <Form.Control
                                            type="date"
                                            value={startDate}
                                            onChange={handleStartDateChange}
                                        />
                                    </Form.Group>
                                </div>
                                <div className="flex-grow-1  pe-3">
                                    <Form.Group controlId="endDate">
                                        <Form.Label>Дата окончания</Form.Label>
                                        <Form.Control
                                            type="date"
                                            value={endDate}
                                            onChange={handleEndDateChange}
                                        />
                                    </Form.Group>
                                </div>
                                <button className="btn change_back_button">
                                    Показать
                                </button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
                <Table striped bordered hover>
                    <thead>
                        <th>N</th>
                        <th>Статус</th>
                        <th>Дата создания</th>
                        <th>Дата оформления</th>
                        <th>Дата завершения</th>
                    </thead>
                    <tbody>
                    {
                        data.map((shipping) => (
                            <TableRow key={shipping.number}
                            shipping={shipping}
                        />)
                        )
                    
                }

                    </tbody>
                </Table>
            </Container>
        </>
    );
};