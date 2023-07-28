<script setup>
  import AppBar from '@/components/AppBar.vue'
  import AppView from '@/layouts/MainViewLayout.vue'
  import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
  <div id="page-container">
    <v-app>
      <app-bar />
      <div id="content-wrap">
        <app-view />
      </div>
      <div id="footer">
        <app-footer />
      </div>
    </v-app>
  </div>
</template>

<style>
#page-container {
  position: relative;
  min-height: 100vh;
}

#content-wrap {
  padding-bottom: 4.5rem;
}

#footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 4.5rem;
}
</style>