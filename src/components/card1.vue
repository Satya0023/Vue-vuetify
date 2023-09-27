<template>
  <div style="position: relative; margin-top: 12px; height: 200px; width: 670px;">
    <!-- Image positioned over the card -->
    <div style="position: absolute; margin-top: -15px; margin-left: 350px; width: 550px; height: 400px; z-index: 2;">
      <img src="../assets/avtar4.png" style="height: 200px; max-width: 100%;">
    </div>
    <!-- Card content -->
    <v-card style="height: 200px; width: 700px;">
      <!-- Card title -->
      <v-card-title class="card-title">
        Congratulations John!🎉
      </v-card-title>
      <v-card-actions>
      </v-card-actions>
      <v-card-text style="text-align: start;">
        <label>You have done 72% 🤩 more sales today <br> Check your new raising badge in your profile.</label>
      </v-card-text>
    </v-card>
  </div>
</template>
<style>
v-card {
  background-color: aqua;
}
</style>
