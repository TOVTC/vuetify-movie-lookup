<script setup>
  // import { ref, VueElement } from 'vue';

  function placeholder(term) {
    console.log(term);
  }
</script>

<template>
  <v-app-bar flat>
    <v-app-bar-title @click="placeholder('homepage')">
      <v-icon>
        <v-img src="@/assets/logo.png"/>
      </v-icon>
      Movie Lookup
    </v-app-bar-title>
    <v-btn text @click="placeholder('trending')">Trending</v-btn>
    <v-btn text @click="placeholder('popular')">Popular</v-btn>
    <v-btn text @click="placeholder('top rated')">Top Rated</v-btn>
    <v-btn text @click="placeholder('now playing')">Now Playing</v-btn>
  </v-app-bar>
</template>