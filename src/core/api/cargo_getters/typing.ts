export interface Cargo {
    pk: number;
    title: string;
    price_per_ton: number;
    short_description: string;
    description: string;
    is_active: boolean;
    logo_file_path: string;
}

export interface CargoListResponse {
    cargoes: Cargo[];
    cnt: number;
    shipping_id : number;
}

// export interface CargoInShippingData{
//     pk : number
//     title : string
//     short_description : string
//     description : string
//     price_per_ton : number
//     logo_file_path : string
// }

export interface CargoInShippingItem{
    pk : number
    title : string
    short_description : string
    description : string
    price_per_ton : number
    logo_file_path : string
    amount : number
}

export interface ShippingRequestByIdResponse {
    pk : number
    client: number;
    manager: number;
    organization: string
    cargo_list : CargoInShippingItem[]

}