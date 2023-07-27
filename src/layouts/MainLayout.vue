<script setup>
  import AppBar from '@/components/AppBar.vue'
  import AppView from '@/layouts/MainViewLayout.vue'
  import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
  <v-app>
    <app-bar />

    <app-view />

    <app-footer />
  </v-app>
</template>