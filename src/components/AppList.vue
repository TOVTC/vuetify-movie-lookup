<script setup>
import { onMounted, ref } from 'vue';

const props = defineProps(['results']);
const movies = ref([]);

class MovieOption {
  constructor(id, generatedTitle, posterPath) {
    this.id = id,
    this.generatedTitle = generatedTitle,
    this.posterPath = posterPath
  }
}

function generateTitle(title, date) {
  if (!date || date.trim().length === 0) {
    return title;
  }
    return `${title} (${date.split('-')[0]})`
}

function generatePosterPath(path) {
  if (!path || path.trim().length === 0) {
    return '../favicon.png';
  } 
  return `https://image.tmdb.org/t/p/original${path}`;
}

onMounted(() => {
  props.results.forEach(movie => {
    movies.value.push(new MovieOption(
      movie.id,
      generateTitle(movie.title, movie.release_date),
      generatePosterPath(movie.poster_path),
    ));
  });
});
</script>

<template>
<v-list v-if="movies">
  <v-list-item v-for="(item, i) in movies" :key="i">
    <template v-slot:prepend>
      <v-img :src="item.posterPath" :width="20" />
    </template>
    <router-link class="text-decoration-none text-black" :to="{ name: 'Details', params: { id: item.id } }">
      <v-list-item-title :v-text="item.generatedTitle" class="mx-5">{{ item.generatedTitle }}</v-list-item-title>
    </router-link>
  </v-list-item>
</v-list>
</template>