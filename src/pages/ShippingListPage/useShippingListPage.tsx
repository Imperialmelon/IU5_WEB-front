import React, {useEffect, useState} from "react";
import { FilterProps } from "../../components/TableFilters/typing.tsx";
import { TableProps } from "../../components/ShippingsTable/typing.tsx";
import { TableRow } from "../../components/ShippingsTable/typing.tsx";
import {api} from "../../core/api/index.ts";
import {Shipping} from "../../core/api/Api.ts";
import { ShippingMockList } from "../../core/mock/ShippingListMock.ts";
import { useDispatch, useSelector, UseSelector } from "react-redux";
import { selectApp } from "../../core/store/slices/selector.ts";
import { setFilterEndDate, setFilterStatus, setFilterStartDate } from "../../core/store/slices/appSlice.ts";


export const useShippingListPage = () => {
 
    const {filterStatus, filterStartDate, filterEndDate } = useSelector(selectApp)
    const dispatch = useDispatch();
    const [TableState, setTable] = useState<TableProps>({data : []})

    const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setFilterStatus(event.target.value))
    };
    const handleStartDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setFilterStartDate(event.target.value));
    };
    const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setFilterEndDate(event.target.value));
    };

    const applyFilters = () => {
        api.shippings.shippingsList(
            {
                status: mapStringToOptQueryParam(filterStatus),
                formation_start: mapStringToOptQueryParam(filterStartDate),
                formation_end: mapStringToOptQueryParam(filterEndDate),
            })
            .then((data) => {
                setTable(mapBackendResultToTableData(data.data))
            })
            .catch(() => {
    
                setTable(
                    mapBackendResultToTableData(
                        filterDataOnFront(ShippingMockList,
                            mapStringToOptQueryParam(filterStatus),
                            mapStringToOptQueryParam(filterStartDate),
                            mapStringToOptQueryParam(filterEndDate))
                    )
                );
            })
    }
    useEffect(applyFilters, [])

    const filterProps: FilterProps = {
    
        selectedStatus: filterStatus,
        selectedStartDate: filterStartDate,
        selectedEndDate: filterEndDate,

        handleStatusChange: handleStatusChange,
        handleStartDateChange: handleStartDateChange,
        handleEndDateChange: handleEndDateChange,
        handleUseFilters: applyFilters,
    };

    return {
        TableState, filterProps
    }
}
    function mapStringToOptQueryParam(str?: string): string | undefined {
        if (str == "") {
            return undefined;
        }
        return str;
    }
    

    function mapStatusToTable(status?: string): string {
        switch (status) {
            case "FORMED":
                return "Ожидает транспортировки";
            case "COMPLETED":
                return "Доставлено";
            case "REJECTED":
                return "Отклонено";
            default:
                return "В работе заказчика";
        }
    }



        function convertDatetimeToDDMMYYYY(dateString: string | null | undefined): string {
            if (!dateString) return "";
            const date = new Date(dateString);
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const year = date.getFullYear();
            return `${day}.${month}.${year}`;
        }


    export function mapBackendResultToTableData(requests: Shipping[]): TableProps {
            const data: TableRow[] = requests.map((request) => {
                return{
                    number: request.pk || 0,
                    status: mapStatusToTable(request.status),
                    creationDate: convertDatetimeToDDMMYYYY(request.creation_datetime),
                    formDate: convertDatetimeToDDMMYYYY(request.formation_datetime),
                    completitionDate: convertDatetimeToDDMMYYYY(request.completion_datetime),
                    total_price: Number(request.total_price)
                }
        })
        return {data}
    }

    export function filterDataOnFront(
        Shippings: Shipping[],
        filterStatus?: string,
        filterStartDate?: string,
        filterEndDate?: string
    ): Shipping[] {
        return Shippings.filter((row) => {
            let matchesStatus = true;
            let matchesStartDate = true;
            let matchesEndDate = true;
            if (filterStatus) {
                matchesStatus = row.status === filterStatus;
            }
            if (filterStartDate && row.formation_datetime) {

                matchesStartDate = new Date(row.formation_datetime) >= new Date(filterStartDate);
            }
            if (filterEndDate && row.formation_datetime) {
                matchesEndDate = new Date(row.formation_datetime) <= new Date(filterEndDate);
            }
            return matchesStatus && matchesStartDate && matchesEndDate;
        })
    }