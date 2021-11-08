// User-Client
export interface AuthState{ //state
    authUsuario: Auth
}
export interface Auth{ //model
    id:number,
    nombre:string,
    email: string,
    token: string,
}

// Products
export interface ProductsState{ //state
    products:Product[],
    product: Product
}
export interface Product{ //model
    id:number,
    name: string,
    precio: number,
    status: boolean,
    categoriaId: number,
    descripcion: string,
}
// Car Products
export interface CarProductsState{ //state
    carproducts:CarProduct[],
    carproduct: CarProduct,
}
export interface CarProduct{ //model
    id:number,
    nombre: string,
    precio: number,
    status: boolean,
    categoriaId: number,
    descripcion: string,
    cantidad: number,
}

// Venta
export interface VentaState{ //state
    venta: Venta
}
export interface Venta{ //model
    id:number,
    fecha: string,
    usuarioId: number,
}
// Detalle Venta
export interface DetalleVentaState{ //state
    detalleVentas:DetalleVenta[],
    detalleVenta: DetalleVenta,
}
export interface DetalleVenta{ //model
    id: number,
    cantidad:number,
    precio: number,
    subtotal: number,
    productoId: number,
    ventaId: number,
}