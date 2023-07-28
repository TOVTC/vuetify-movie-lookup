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
    ));
  });
});
</script>

<template>
    <h3 class="text-h5 font-weight-bold">Similar Films</h3>
    <v-list
            :items="movies"
            item-title="generatedTitle"
            item-value="id"
          >
    </v-list>
</template>