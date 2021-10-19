// State
export interface ProductsState{
    products:Product[],
    product: Product
}

// Models
export interface Product{
 
    name: string,
    precio: number,
    status: boolean,
    categoriaId: number,
    descripcion: string,
}




