<template>
  <v-app id="inspire" style="background-color: #F8F8FF">
    <!-- sidebar  -->
    <div>
      <sidebar-menu-akahon />
    </div>

    <div class="navbar" id="navbar">
      <div style="margin-top: 5px; margin-left: 8%; margin-right: 3%;">
        <v-toolbar fixed="top" style="background-color: #F8F8FF">
          <div style="background-color: #F8F8FF;">
            <v-text-field placeholder="search" hide-details prepend-icon="mdi-magnify"></v-text-field>
          </div>
          <span class="meta-key">⌘K</span>
          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-translate</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon large>mdi-laptop</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-apps</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-bell-outline</v-icon>
          </v-btn>

          <v-btn icon>
            <v-avatar>
              <img src="../src/assets/avtar.png" />
            </v-avatar>
          </v-btn>
        </v-toolbar>
      </div>
    </div>

    <!-- Main cards -->
    <v-container class="container-fluid">
      <v-layout>
        <v-main>
          <v-container>
            <!-- First row -->
            <div class="container">
              <div class="flex-item">
                <v-card>
                  <card1 />

                </v-card>
              </div>
              <div class="flex-item">
                <v-card>
                  <card2 />
                </v-card>
              </div>
              <div class="flex-item">
                <v-card>
                  <card3 />
                </v-card>
              </div>
            </div>

            <!-- Second row -->
            <div class="container" style="width: 100%;">
              <div class="flex-item" style="height: 100%; width: 58%; margin-top: 10px;">
                <v-card>
                  <card4 />
                </v-card>
              </div>
              <div class="flex-item">
                <v-card>
                  <card5 />
                </v-card>
              </div>
            </div>

            <!-- Third row -->
            <div class="container" style="margin-top: 5px;">
              <div class="flex-item">
                <v-card>
                  <card6 />
                </v-card>
              </div>
              <div class="flex-item">
                <v-card>
                  <card7 />
                </v-card>
              </div>
              <div class="flex-item">
                <v-card>
                  <card8 />
                </v-card>
              </div>
            </div>
            <!-- 4th  row -->
            <div class="container" style="margin-top: 5px;">
              <div class="flex-item">
                <v-card>
                  <card9 />
                </v-card>
              </div>
              <div class="flex-item">
                <v-card>
                  <card10 />
                </v-card>
              </div>

            </div>
          </v-container>
        </v-main>
      </v-layout>

    </v-container>
    <v-footer class="bg-grey-lighten-1" style="font-size: medium; margin-left: 70px;">
      <label>© 2023 Made With <v-icon style="color: red;">mdi-heart-outline </v-icon>By </label>
      <label><a>TheamSelection</a></label>

      <v-row style="margin-left:500px;">


        <a v-for="link in links" :key="link" color="blueviolet" variant="text" class="mx-2" rounded="xl"
          style="margin-right: 15px; color:blueviolet">
          {{ link }}
        </a>

      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import Vue from "vue";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import { BIcon, BIconArrowUp, BIconArrowDown } from "bootstrap-vue";
import donougtChart from "./components/donougtChart.vue";
import { VCard, VCardItem } from 'vuetify/lib';
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.component("BIcon", BIcon);
Vue.component("BIconArrowUp", BIconArrowUp);
Vue.component("BIconArrowDown", BIconArrowDown);

import SidebarMenuAkahon from "@/components/Sidebar-menu-akahon.vue";
import card1 from "@/components/card1.vue";
import card2 from "@/components/card2.vue";
import card3 from "@/components/card3.vue";
import card4 from "@/components/card4.vue";
import card5 from "@/components/card5.vue";
import card6 from "@/components/card6.vue";
import card7 from "@/components/card7.vue";
import card8 from "@/components/card8.vue";
import card9 from "@/components/card9.vue";
import card10 from "@/components/card10.vue";
import foot from "@/components/foot.vue";

export default {
  name: "App",
  components: {
    SidebarMenuAkahon,
    card1,
    card2,
    card3,
    card4,
    card5,
    card6,
    card7,
    card8,
    card9,
    card10,
    foot,

    VCard,
    VCardItem,
    donougtChart,

  },
  data: () => ({
    links: [
      'Home',
      'About Us',
      'Team',
      'Services',
      'Contact Us',
    ],
  }),
};








</script>

<style>
.container-fluid {
  width: 900px;
  margin-right: 0px;
  margin-left: 90px;
}

.container {
  display: flex;
  flex-wrap: wrap;
  border-radius: 10px;
  padding: 5px;
}





#navbar {
  margin-top: 0;
  position: sticky;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  opacity: 100%;
}

.flex {
  display: flex;
  padding: 10px;
  gap: 0;
}

template {
  width: 100%;
}

navigation-drawer {
  background-color: #dcdcdc;
}



.flex-item {
  padding: 5px;
  margin: 4px;
}

.flex-item>div {
  background-color: aliceblue;
  margin: 4px;
}

#inspire {
  width: 100%;
}

v-icon {
  color: red;
}



.container-fluid {
  width: 100%;
}
</style>
