<script setup>
import { onMounted, ref } from 'vue';
import AppList from '@/components/AppList.vue';
import MediaService from '@/services/MediaService.js';

const movies = ref(null);
const isLoading = ref(true);
const dialog = ref(false);

onMounted(async () => {
  let response = await MediaService.getPopular();
  if (!response) {
    dialog.value = true;
    movies.value = [];
  } else {
    movies.value = response.data.results;
  }
  isLoading.value = false;
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
        <v-progress-circular v-if="isLoading" indeterminate color="grey-lighten-5" size="50" />
        <AppList v-else :results="movies" />
      </v-col>
      <v-spacer />
    </v-row>
  </v-responsive>
</v-container><div class="text-center">
<v-dialog
  v-model="dialog"
  width="auto"
>
  <v-card>
    <v-card-text>
      Something went wrong.
    </v-card-text>
    <v-card-actions>
      <v-btn color="blue" block @click="dialog = false">Close Dialog</v-btn>
    </v-card-actions>
  </v-card>
</v-dialog>
</div>
</template>