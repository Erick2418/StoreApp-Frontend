import {  Auth,AuthState} from './../../types/types';
import {GetterTree,MutationTree,ActionTree} from 'vuex';
import axios from 'axios';
import router from '@/router';
import Swal from 'sweetalert2';

type AuthGetter = GetterTree<AuthState, any>

const state: AuthState = {
    authUsuario:{
        id:0,
        nombre:'',
        email: '',
        token: '', 
    }
}

const getters: AuthGetter={
    getAuth: state=>state.authUsuario
}

const mutations: MutationTree<AuthState>={
    addAuth(state,newAuth){
        state.authUsuario=newAuth;        
    }
}

const actions: ActionTree<AuthState,any>={

    async loginAsync ({commit},data){
            
        let apiAuth;
    
        try {

            apiAuth = await axios.post(`http://localhost:3002/api/login`,
                data
                ).then(({data}) =>{

                    let authentification:Auth = {id:data.id, nombre:data.nombre,email:data.email,token:data.token}
                    commit('addAuth',authentification);
                    Swal.fire({
                        icon: 'success',
                        title: 'Inicio de Session Exitoso!',
                    })
                    router.push('/');

                }).catch(err=>{
                    Swal.fire({
                        icon: 'error',
                        title: 'Verifique sus datos e intente nuevamente.',
                    })
                    
                })

            

        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error!',

            })
        }

    },




}


export const auth = {
    state,
    getters,
    mutations,
    actions
  }