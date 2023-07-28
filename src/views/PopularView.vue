<script setup>
import { onMounted, ref } from 'vue';
import AppList from '@/components/AppList.vue';
import MediaService from '@/services/MediaService.js';

const movies = ref(null);

onMounted(async () => {
  let response = await MediaService.getPopular()
  if (!response) {
    alert("something went wrong")
    return
  } else {
    movies.value = response.data.results
  }
});
</script>

<template>
  <v-container class="fill-height" fluid>
    <v-responsive class="align-center fill-height">
      <v-row class="mt-5">
        <v-spacer />
        <v-col cols="12" sm="10" md="8">
          <h2 class="align-start text-h4">Popular</h2>
        </v-col>
        <v-spacer />
      </v-row>
      <v-row v-if="movies" class="mb-5">
        <v-spacer />
        <v-col cols="12" sm="10" md="8" class="text-left">
          <AppList :results="movies" />
        </v-col>
        <v-spacer />
      </v-row>
    </v-responsive>
  </v-container>
</template>