<script setup>
import { onMounted, ref } from 'vue';
import { data } from '../assets/data.js';

const movies = ref([]);
const movieObjects = ref(data);

class MovieOption {
  constructor(id, generatedTitle) {
    this.id = id,
    this.generatedTitle = generatedTitle
  }
}

function generateTitle(title, date) {
  if (!date || date.trim().length === 0) {
    return title;
  }
    return `${title} (${date.split('-')[0]})`
}

onMounted(() => {
  movieObjects.value.forEach(movie => {
    movies.value.push(new MovieOption(
      movie.id,
      generateTitle(movie.title, movie.release_date)
    ))
  });
  console.log(movies.value);
});
</script>

<template>
  <v-container class="fill-height" fluid>
    <v-responsive class="align-center text-center fill-height">
      <v-row>
        <v-spacer />
        <v-col cols="6" class="text-center">
          <v-list
            :items="movies"
            item-title="generatedTitle"
            item-value="id"
          >
          </v-list>
        </v-col>
        <v-spacer />
      </v-row>
    </v-responsive>
  </v-container>
</template>