<script setup>
  // import { ref, VueElement } from 'vue';

  function placeholder(term) {
    console.log(term);
  }
</script>

<template>
  <v-app-bar flat class="bg-blue">
    <v-app-bar-title @click="placeholder('homepage')">
      <v-icon class="mx-2">
        <v-img src="/favicon.png"/>
      </v-icon>
      <p class="d-inline mx-2">Movie Lookup</p>
    </v-app-bar-title>
    <!-- <v-spacer /> -->
    <v-btn text @click="placeholder('trending')">Trending</v-btn>
    <v-btn text @click="placeholder('popular')">Popular</v-btn>
    <v-btn text @click="placeholder('top rated')">Top Rated</v-btn>
    <v-btn text @click="placeholder('now playing')">Now Playing</v-btn>
  </v-app-bar>
</template>