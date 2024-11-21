export interface TableRow {
    number : number
    status : string
    creationDate : string
    formDate : string
    completitionDate : string
    total_price : number
}

export interface TableProps {
    data : TableRow[]
}