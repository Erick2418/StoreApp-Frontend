import {  Venta,VentaState} from './../../types/types';
import {GetterTree,MutationTree,ActionTree} from 'vuex';
import axios from 'axios';
import router from '@/router';
import Swal from 'sweetalert2';

type AuthGetter = GetterTree<VentaState, any>

const state: VentaState = {
    venta:{
        id:0,
        fecha: '', 
        usuarioId: 0, 
    }
}

const getters: AuthGetter={
    getAuth: state=>state.venta
}

const mutations: MutationTree<VentaState>={
    addAuth(state,newAuth){
        state.venta=newAuth;        
    }
}

const actions: ActionTree<VentaState,any>={



}


export const venta = {
    state,
    getters,
    mutations,
    actions
  }