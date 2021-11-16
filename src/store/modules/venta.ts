import { Venta, VentaState } from './../../types/types';
import { GetterTree, MutationTree, ActionTree } from 'vuex';
import axios from 'axios';
import router from '@/router';
import Swal from 'sweetalert2';

type VentaGetter = GetterTree<VentaState, any>

const state: VentaState = {
    venta: {
        id: 0,
        fecha: '',
        usuarioId: 0,
    }
}

const getters: VentaGetter = {
    getVenta: state => state.venta
}

const mutations: MutationTree<VentaState> = {
    addAuth(state, newAuth) {
        state.venta = newAuth;
    }
}

const actions: ActionTree<VentaState, any> = {
    async addUFacturaAsync({ commit }, datos) {
     console.log(datos);
        let apiFactura;
        let idUsuario = datos.venta.usuarioId;
        let datosNewVenta = {
            fecha: "12/12/12",
            usuarioId: idUsuario,
        }
        try {

            apiFactura = await axios.post('http://localhost:3002/api/compra/newVenta',
                datosNewVenta
            ).then( async ({ data }) => {
                console.log(data)
                // let idVenta = data.detalleVenta.id;
                // console.log(idVenta);
                // try {

                //     apiFactura = await axios.post('http://localhost:3002/api/compra/newDetalleVenta',
                //         {
                //             "cantidad": 5,
                //             "precio": 0.50,
                //             "subtotal": 1.50,
                //             "productoId": 1,
                //             "ventaId": idVenta
                //         }
                //     ).then(({ data }) => {
                //         console.log(data);
                //     });


                // } catch (error) {
                //     console.log(error);
                // }

            });


        } catch (error) {
            console.log(error);
        }

    },



}


export const venta = {
    state,
    getters,
    mutations,
    actions
}