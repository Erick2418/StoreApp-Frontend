<template>
  <v-container class="">
    Soy el login
    <div class="d-flex flex-column justify-center align-center mb-6 ma-5 pa-2">
      <LoginForm/>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import LoginForm from './../components/LoginForm.vue'
export default Vue.extend({
  name: "Login",
  data: () => ({
  }),
  methods: {
  },
  components:{
    LoginForm
  }
});
</script>