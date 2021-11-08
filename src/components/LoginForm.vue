<template>
  <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="submit">
    <v-text-field
      outlined
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
      prepend-inner-icon="mdi-email"
    ></v-text-field>

    <v-text-field
      outlined
      type="password"
      v-model="password"
      :rules="passwordRules"
      label="Constraseña"
      required
      prepend-inner-icon="mdi-lock"
    ></v-text-field>

    <v-btn :disabled="!valid" outlined color="indigo" block type="submit">
      Iniciar Sesion
    </v-btn>

    <v-btn class="ma-3" color="info" plain> ¿Olvidaste tu contraseña? </v-btn>
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

import { Auth as IAuth } from "@/types/types";
import { State, Getter, Mutation, Action } from "vuex-class";

@Component
export default class Auth extends Vue {
  @Getter  getAuth!: Auth;
  @Action loginAsync: any;

  //life cycle

  //data
  valid: boolean = true;
  password: string = "";
  passwordRules: any = [
    (v: string) => !!v || "password is required",
    (v: string) =>
      (v && v.length <= 10) || "password must be less than 10 characters",
  ];
  email: string = "";
  emailRules: any = [
    (v: string) => !!v || "E-mail is required",
    (v: string) => /.+@.+\..+/.test(v) || "E-mail must be valid",
  ];
  
  //metods
  async submit() {
    await this.loginAsync({ email: this.email, password: this.password })
  }
}
</script>