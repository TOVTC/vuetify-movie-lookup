<script setup>
import { onMounted, ref } from 'vue';
import { data } from '../assets/data.js';

const movies = ref([]);
const movieObjects = ref(data);

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
  movieObjects.value.forEach(movie => {
    movies.value.push(new MovieOption(
      movie.id,
      generateTitle(movie.title, movie.release_date),
      generatePosterPath(movie.poster_path),
    ));
  });
});
</script>

<template>
  <v-container class="fill-height" fluid>
    <v-responsive class="align-center fill-height">
      <v-row class="mt-5">
        <v-spacer />
        <v-col cols="12" sm="10" md="8">
          <h2 class="align-start text-h4">Now Playing</h2>
        </v-col>
        <v-spacer />
      </v-row>
      <v-row v-if="movies" class="mb-5">
        <v-spacer />
        <v-col cols="12" sm="10" md="8" class="text-left">
          <v-list>
            <v-list-item v-for="(item, i) in movies" :key="i">
              <template v-slot:prepend>
                <v-img :src="item.posterPath" :width="20"></v-img>
              </template>
              <router-link class="text-decoration-none text-black" :to="{ name: 'Details', params: { id: item.id } }">
                <v-list-item-title :v-text="item.generatedTitle" class="mx-5">{{ item.generatedTitle }}</v-list-item-title>
              </router-link>
            </v-list-item>
          </v-list>
        </v-col>
        <v-spacer />
      </v-row>
    </v-responsive>
  </v-container>
</template>