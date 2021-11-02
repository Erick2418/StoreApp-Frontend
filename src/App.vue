<template>
  <v-app id="inspire">
    <AppBar />

    <v-main>
      <router-view />
    </v-main>

    <Footer />
  </v-app>
</template>

<script lang="ts">

import Vue from "vue";
import AppBar from "./components/AppBar.vue";
import Footer from "./components/Footer.vue";

export default Vue.extend({
  name: "App",
  components: {
    AppBar,
    Footer,
  },
  data: () => ({}),
});
</script>
