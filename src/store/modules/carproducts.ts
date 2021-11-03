import {  Product,ProductsState} from './../../types/types';
import {GetterTree,MutationTree,ActionTree} from 'vuex';
import axios from 'axios';
// import Swal from 'sweetalert2';

type CarproductsGetter = GetterTree<ProductsState, any>

const state: ProductsState = {

    products: [],
    product:{
        name: '',
        precio: 0, 
        status: false,
        categoriaId: 0,
        descripcion: '', 
    }
}

const getters: CarproductsGetter={

    getCarproducts: state=>state.products,
    getCarproductsLength: state=>state.products.length,
    
    getCarproduct: state=>state.product,

}

const mutations: MutationTree<ProductsState>={

    addCarproducts(state,newProduct){
        state.products=[ state.product, ...state.products];
        // console.log(state.products);
    },

    addCarproduct(state,newProduct){
        state.product=newProduct;        
    }
}

const actions: ActionTree<ProductsState,any>={

    async addProductCar ({commit},product:Product){

        let apiUsuarios;
        

        try {

           
                commit('addCarproducts',product);
          
        } catch (error) {
            console.log(error);
        }

    },

    async getCarproductAsync ({commit},idProducto:number){
            
        let apiProducts;
        
        try {

            apiProducts = await axios.get(`http://localhost:3002/api/producto/${idProducto}`).then(({data}) => {
            //  https://backend-app-store.herokuapp.com/api/producto/
            // http://localhost:3002/api/producto/
              commit('addCarproduct',data.producto);
            });


        } catch (error) {
            // const apiUsuario = error.response;
            // Swal.fire({
            //     icon: 'error',
            //     title: 'Oops...',
            //     text: apiUsuario.data.msg + ", intente nuevamente",
 
            // })
        }

    },


    // async RegisterUser ({commit},data){

    //     let apiUsuarios;

    //     try {

    //         apiUsuarios = await axios.post('http://localhost:3000/api/user',
    //         data
    //         ).then((data) => {
    //             console.log(data);
    //             Swal.fire(
    //                 'Registro con exito',
    //                 '',
    //                 'success'
    //               )
    //         }).catch( err=> {
    //             const apiUsuario = err.response;
           
    //             Swal.fire({
    //               icon: 'error',
    //               title: 'Oops...',
    //               text: apiUsuario.data.msg + ", intente nuevamente",
   
    //             })
    //         } );
    //     } catch (error) {
    //         const apiUsuario = error.response;
           
    //          Swal.fire({
    //            icon: 'error',
    //            title: 'Oops...',
    //            text: apiUsuario.data.msg + ", intente nuevamente",

    //          })
    //     }

    // },
    
    // async deleteUsersAsync ({commit},id:string){
            
    //     let apiUsuarios;
        
    //     try {

    //         apiUsuarios = await axios.delete('http://localhost:3000/api/user/'+id).then(({data}) => {
    //             Swal.fire(
    //                 'Elimnacion con exito',
    //                 '',
    //                 'success'
    //             )
    //         });


    //     } catch (error) {
    //         const apiUsuario = error.response;
    //         Swal.fire({
    //             icon: 'error',
    //             title: 'Oops...',
    //             text: apiUsuario.data.msg + ", intente nuevamente",
 
    //         })
    //     }

    // },

    // async EditUser ({commit},data){

    //     const ids= data.id;
    //     delete data.id;


    //     console.log(data);


    //     let apiUsuarios;
    //     let datos={
    //         "firstname":data.firstname,
    //         "fecha": data.fecha,
    //         "correo": data.correo,
    //         "telefono":data.telefono,
    //         "sueldo": data.sueldo+""
    //     }
    //     try {

    //         apiUsuarios = await axios.put('http://localhost:3000/api/user/'+ids,
    //         datos
            

    //         ).then((data) => {
    //             console.log(data);
    //             Swal.fire(
    //                 'Registro con exito',
    //                 '',
    //                 'success'
    //               )
    //         }).catch( err=> {
    //             const apiUsuario = err.response;
    //                 console.log(apiUsuario)
    //             Swal.fire({
    //               icon: 'error',
    //               title: 'Oops...',
    //               text: apiUsuario + ", intente nuevamente",
   
    //             })
    //         } );
    //     } catch (error) {
    //         const apiUsuario = error.response;
           
    //          Swal.fire({
    //            icon: 'error',
    //            title: 'Oops...',
    //            text: apiUsuario.data.msg + ", intente nuevamente",

    //          })
    //     }

    // },



}


export const carproducts = {
    state,
    getters,
    mutations,
    actions
  }