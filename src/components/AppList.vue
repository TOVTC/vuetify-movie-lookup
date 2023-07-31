<script setup>
import { onMounted, ref } from 'vue';

const props = defineProps(['results']);
const movies = ref([]);
const isLoading = ref(true);

class MovieOption {
  constructor(id, generatedTitle, posterPath) {
    this.id = id,
    this.generatedTitle = generatedTitle,
    this.posterPath = posterPath
  }
}

function generateTitle(title, date) {
  if (!date || date === 'null' || date.trim().length === 0) {
    return title;
  }
    return `${title} (${date.split('-')[0]})`
}

function generatePosterPath(path) {
  if (!path || path === 'null' || path.trim().length === 0) {
    return '/favicon.png';
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
<v-list v-if="movies && movies.length > 0">
  <v-list-item v-for="(item, i) in movies" :key="i">
    <template v-slot:prepend>
      <v-img :src="item.posterPath" :width="30" @loadstart="isLoading = true" @load="isLoading = false" />
      <v-progress-circular v-if="isLoading" indeterminate color="grey-lighten-5" size="30" />
    </template>
    <router-link class="text-decoration-none text-black" :to="{ name: 'Details', params: { id: item.id , title: item.generatedTitle } }">
      <v-list-item-title :v-text="item.generatedTitle" class="mx-5 pa-3">{{ item.generatedTitle }}</v-list-item-title>
    </router-link>
  </v-list-item>
</v-list>
<v-list v-else>
  <v-list-item>
    <v-list-item-title>Nothing to display</v-list-item-title>
  </v-list-item>
</v-list>
</template>