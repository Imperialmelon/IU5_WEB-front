export interface CargoInShippingProps {
    id : number
    title : string
    price_per_ton : string
    logo_file_path?: string;
    amount : string
    price_of_card : string
    isEditable : boolean
    shipping_id : string
    clickDelete : (key : number) => void
    updateAmounts : (key : number, value : string) => void

}
