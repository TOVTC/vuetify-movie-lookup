<script setup>
import { onMounted, ref } from 'vue';
import { data } from '@/assets/data.js';
import AppList from '@/components/AppList.vue';

const movieObjects = ref(data);

onMounted(() => {

});
</script>

<template>
  <v-container class="fill-height" fluid>
    <v-responsive class="align-center fill-height">
      <v-row class="mt-5">
        <v-spacer />
        <v-col cols="12" sm="10" md="8">
          <h2 class="align-start text-h4">Top Rated</h2>
        </v-col>
        <v-spacer />
      </v-row>
      <v-row class="mb-5">
        <v-spacer />
        <v-col cols="12" sm="10" md="8" class="text-left">
          <AppList :results="movieObjects" />
        </v-col>
        <v-spacer />
      </v-row>
    </v-responsive>
  </v-container>
</template>