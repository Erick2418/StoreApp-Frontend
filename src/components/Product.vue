<template>
  <v-container class="grey lighten-5">
       
  <div class="d-flex justify-center mb-2 mt-2" >
     <h2> MEJORES OFERTAS </h2>
  </div>

    <v-row no-gutters>
      
      <div v-for="item in items" :key="item.indexOf"  >
        
          <v-col cols="12" sm="12" >
              <v-card :loading="loading" class="mx-auto" max-width="240">
                <template slot="progress">
                  <v-progress-linear
                    color="deep-purple"
                    height="10"
                    indeterminate
                  ></v-progress-linear>
                </template>
                <v-img
                  height="200"
                 :src="getImgUrl(item.nombre)" v-bind:alt="item.nombre"
                ></v-img>
                <v-card-text>
                    <div class="d-flex justify-center">
                      <div class="text-center text-capitalize indigo--text text--darken-2" ><h3><strong>{{item.nombre}}</strong></h3> </div>
                    </div>
                    <div class="d-flex justify-center"> 
                        <v-rating
                          class="text-center "
                        :value="4.5"
                        color="amber"
                        dense
                        half-increments
                        readonly
                        size="14"
                      ></v-rating>
                    </div>
                    <div class="my-4 text-subtitle-1 indigo--text text--darken-2">
                        <div  class="d-flex justify-center mb-3" >           
                            <h4 class="light-blue--text text--darken-1" >${{item.precio}}</h4> 
                              &nbsp; &nbsp;   
                            <h5 class="text-decoration-line-through grey--text text--lighten-1"> ${{  Math.floor(item.precio) + 5.55 }}</h5> 
                              &nbsp; &nbsp;  
                            <h5 class="red--text " >12% desc.</h5> 
                        </div>
                    </div>
                </v-card-text>
              </v-card>
          </v-col>

      </div>
    </v-row>









     



  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

import { Product as IProduct } from "@/types/types";
import { State, Getter, Mutation, Action } from "vuex-class";

@Component
export default class Product extends Vue {
  //vuex
  @State products!: Product[];
  @Getter getProducts!: Product[];
  @Action getProductsAsync: any;

  //life cycle
  async created() {
    await this.getProductsAsync(); // peticion de get products axios

    this.handleProducts(); // call metdos
  }

  //data
  loading: boolean = false;
  selection: number = 1;
  items: any = []; // lo agrego desde el mounted, con el metodo setusertable

  //metods
  handleProducts() {
    this.items = this.getProducts;
  }
  reserve() {
    this.loading = true;
    setTimeout(() => (this.loading = false), 2000);
  }
  getImgUrl(index:string){
      // src="./../assets/img/Chetos.jpg"
   var images = require.context('../assets/img/', false, /\.jpg$/)
    return images('./' + index + ".jpg")
  }
}
</script>
