import {sendRequest} from "../index.ts";
import {CargoListResponse, Cargo} from "./typing.ts";
export const getCargoList = async (searchTitle?: string) => {
    try {
        const response: CargoListResponse = await sendRequest({
            method: "GET",
            path: "/cargoes",
            params: searchTitle ? {cargo_name: searchTitle} : undefined,
        });
        return response;

    } catch (error) {
        console.error("Error fetching planets:", error);
        throw error;
    }
};

export const getCargo = async (id : string) => {
    try{
        const response : Cargo = await sendRequest({
            method : "Get",
            path: `/cargo/${id}`,
        });
        return response
    }
    catch (error){
        console.error("Error fetching planets:", error);
        throw error;
    }
}