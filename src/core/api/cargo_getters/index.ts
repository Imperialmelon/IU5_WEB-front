import {sendRequest} from "../index.ts";
import {CargoListResponse, Cargo} from "./typing.ts";
export const getCargoList = async (searchTitle?: string, priceFilter? : Number) => {
    try {
        const params: {[key: string]: any} = {};
    
    if (searchTitle) {
            params.cargo_name = searchTitle;
        }

    if (priceFilter) {
            params.min_price = priceFilter;
        }
    
        const response: CargoListResponse = await sendRequest({
            method: "GET",
            path: "/cargoes",
            params: Object.keys(params).length > 0 ? params : undefined,
        });
        alert(response.cargoes)
        return response;

    } catch (error) {
        console.error("Error:", error);
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
        console.error("Error", error);
        throw error;
    }
}