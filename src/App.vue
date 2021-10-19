<template>
  
 <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
    <!--  -->
    <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
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
          <v-btn block>
            Logout
          </v-btn>
        </div>
      </template>

    </v-navigation-drawer>

    <v-app-bar app class="deep-orange darken-1">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class=" white--text text--white ">Store Snacks</v-toolbar-title>
    </v-app-bar>

    <v-main>


      <router-view/>


      
    </v-main>
    <v-footer
        dark
        padless
      >
        <v-card
          class="flex "
          flat
          tile
        >
          <v-card-title class="deep-orange darken-1">
            <strong class="subheading">Contactanos en nuestras redes sociales!</strong>

            <v-spacer></v-spacer>

            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4"
              dark
              icon
            >
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-title>

          <v-card-text class="py-2 white--text text-center">
            {{ new Date().getFullYear() }} — <strong>Erick | OK </strong>
          </v-card-text>
        </v-card>
      </v-footer>

  </v-app>

    
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data: () => ({
     drawer: false,
      group: null,
      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard' },
        { title: 'Account', icon: 'mdi-account-box' },
        { title: 'Admin', icon: 'mdi-gavel' },
      ],
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
  }),
 watch: {
      group () {
        this.drawer = false
      },
    },


});
</script>
