<script setup>
  //
</script>

<template>
  <v-app-bar flat class="bg-blue">
    <v-app-bar-title>
      <router-link :to="{name: 'Home'}">
        <v-icon class="mx-2">
        <v-img src="/favicon.png"/>
      </v-icon>
      <h1 class="d-inline-block mx-2 text-h5 text-decoration-none text-white">Movie Lookup</h1>
      </router-link>
    </v-app-bar-title>
    <!-- <v-spacer /> -->
    <v-btn text :to="{ name: 'Trending'}" exact>Trending</v-btn>
    <v-btn text :to="{ name: 'Popular'}" exact>Popular</v-btn>
    <v-btn text :to="{ name: 'Rated'}" exact>Top Rated</v-btn>
    <v-btn text :to="{ name: 'Playing'}" exact>Now Playing</v-btn>
  </v-app-bar>
</template>