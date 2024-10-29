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