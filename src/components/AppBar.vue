<template>
  <div>
    <v-navigation-drawer v-model="drawer" app>
      <!--  -->
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <!--  -->
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block> Logout </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar app class="deep-orange darken-1 elevate-on-scroll">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="white--text">StoreApp</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn class="mx-2" fab dark small>
        <v-icon dark>
          {{ mdiPhone }}
        </v-icon>
      </v-btn>

      <!-- Contactanos -->
      <v-btn class="mx-2" fab dark small>
        <v-badge :content="this.getCarproducts.length" :value="this.getCarproducts.length" color="green" overlap>
          <v-icon>
            {{ mdiCartOutline }}
          </v-icon>
        </v-badge>
      </v-btn> 

      <v-btn class="mx-2" fab dark small>
        <v-icon dark>
          {{ mdiAccount }}
        </v-icon>
      </v-btn>
    </v-app-bar>
  </div>
<!-- USAR EL OTRO VUEX PARA ADAPTAR EL CARRITO -->
</template>

<script lang="ts">

import Vue from "vue";
import { Component } from "vue-property-decorator";

import { Product as IProduct } from "@/types/types";
import { State, Getter, Mutation, Action } from "vuex-class";


import { mdiCartOutline, mdiAccount, mdiPhone } from "@mdi/js";
import { mapState } from 'vuex'

@Component
export default class Product extends Vue {
    producto:any;
    numberCar:number=0;
    //vuex
    @State products!: Product[];
    @Getter getCarproduct!: Product[];
    @Getter getCarproducts!: Product[];
    
    @Action getCarproductAsync: any;
    @Action addProductCar: any;

    //data
    name:string= "AppBar";
    messages:any=0;
    drawer:boolean= false;
    mdiCartOutline:any = mdiCartOutline;
    mdiAccount:any = mdiAccount;
    mdiPhone:any =mdiPhone ;
    items:any =[
      { title: "Dashboard", icon: "mdi-view-dashboard" },
      { title: "Account", icon: "mdi-account-box" },
      { title: "Admin", icon: "mdi-gavel" },
    ];
    //methos
   
    
}
</script>
