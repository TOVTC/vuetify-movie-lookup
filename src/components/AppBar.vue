<script setup>
import { ref } from 'vue';

const drawer = ref(false);

  const navLinks = [
    {
      name: 'Trending',
      label: 'Trending'
    },
    {
      name: 'Popular',
      label: 'Popular'
    },
    {
      name: 'Rated',
      label: 'Top Rated'
    },
    {
      name: 'Playing',
      label: 'Now Playing'
    }
  ];
</script>

<template>
  <v-app-bar flat class="bg-blue">
    <v-app-bar-title>
      <v-icon class="mx-2">
        <v-img src="/favicon.png" class="hidden-xs"/>
        <v-app-bar-nav-icon class="hidden-sm-and-up" @click="drawer = true"/>
      </v-icon>
      <router-link :to="{ name: 'Home' }">
        <h1 class="d-inline-block mx-2 text-h5 text-decoration-none text-white">Movie Lookup</h1>
      </router-link>
    </v-app-bar-title>
    <div class="hidden-xs">
      <v-btn v-for="(link, index) in navLinks" :key="index" :to="{ name: link.name }">{{ link.label }}</v-btn>
    </div>
  </v-app-bar>
  <v-navigation-drawer
        v-model="drawer"
        location="left"
        temporary
      >
      <v-img src="/favicon.png" class="ma-5 pa-5"/>
      <v-divider class="my-5"/>
      <v-list>
        <v-list-item :to="{ name: 'Home' }" @click="drawer = false">Search</v-list-item>
        <v-list-item v-for="(link, index) in navLinks" :key="index" :to="{ name: link.name }" @click="drawer = false">{{ link.label }}</v-list-item>
      </v-list>
  </v-navigation-drawer>
</template>