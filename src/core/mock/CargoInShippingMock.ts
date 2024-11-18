import { ShippingWithInfo } from "../api/Api";
export const ShippingRequestMock: ShippingWithInfo = {
    pk: 0,
    creation_datetime: "2024-10-20T15:07:21.219Z",
    completion_datetime: "2024-10-20T15:07:21.219Z",
    client: 0,
    manager: 0,
    organization: 'OAK', 
    cargo_list: [
        {
            cargo: {
                pk: 0,
                title: "абоба",
                price_per_ton: 100,
                logo_file_path: "http://127.0.0.1:9000/server-soft-logos/0.png"
            },
            amount: 1
        },
        {
            cargo: {
                pk: 1,
                title: "абоба2",
                price_per_ton: 150,
                logo_file_path: "http://127.0.0.1:9000/server-soft-logos/1.png"
            },
            amount: 2
        },
        {
            cargo: {
                pk: 2,
                title: "абоба3",
                price_per_ton: 200,
                logo_file_path: "http://127.0.0.1:9000/server-soft-logos/2.png"
            },
            amount: 3
        }
    ]
};