<template>
  <v-navigation-drawer
    v-model="counter"
    app
    right
    :style="{ width: sizeScreen < 768 ? '100%' : '270px' }"
  >
    <v-btn  small block  text color="info" outlined @click="CloseCar">
      Cerrar 
    </v-btn>
    <v-list>
      <v-list-item v-for="item in getCarproducts" :key="item.id">
        <v-card class="mx-auto mt-2 mb-2" max-width="344" outlined shaped>
          <v-list-item three-line @click="onClickOutside">
            <v-list-item-content>
              <div class="text-overline">{{ item.nombre }}</div>
              <v-card-text>
                <div class="text--primary">{{ item.descripcion }}</div>
              </v-card-text>
            </v-list-item-content>
            <v-list-item-avatar tile size="80">
              <v-img
                class="elevation-6"
                alt=""
                src="./../assets/img/Chetos.jpg"
              ></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-card-actions class="text-center">
            <v-card-text class="d-inline">
              <v-btn icon color="info">
                <v-icon>mdi-plus-circle</v-icon>
              </v-btn>
              <v-chip outlined color="green darken-3">1</v-chip>
              <v-btn icon color="red">
                <v-icon>mdi-minus-circle</v-icon>
              </v-btn>
            </v-card-text>
          </v-card-actions>
        </v-card>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Watch } from "vue-property-decorator";
import { Getter, Mutation } from "vuex-class";

@Component
export default class Product extends Vue {
  //vuex
  @Getter getCarproductsLength!: Product[];
  @Getter getCarproducts!: Product[];
  @Getter getDraweCarProduct!: boolean;
  @Mutation handleDrawerCar!: any;

  //data
  producto: any;
  numberCar: number = 0;
  valWidth: string = "100%";

  //props computeds
  get counter(): boolean {
    return this.getDraweCarProduct;
  }
  set counter(val: boolean) {}
  get sizeScreen(): number {
    var w = window.innerWidth;
    return w;
  }
  set sizeScreen(val: number) {}
  //life cicle
  // @Watch("getCarproductsLength")
  // onProductCarChanged(val: number, oldVal: number) {
  //   console.log(`watch carlength val: ${val} . Oldval: ${oldVal}`);
  // }

  //methods

  CloseCar() {
    this.handleDrawerCar(false);
  }

  onClickOutside() {
    // this.handleDrawerCar(false);
  }
}
</script>
