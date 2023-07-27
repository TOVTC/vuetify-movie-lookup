<script setup>
import { onMounted, ref } from 'vue';

const movies = ref([]);
const movieObjects = [
  {
    "adult": false,
    "backdrop_path": "/mDfJG3LC3Dqb67AZ52x3Z0jU0uB.jpg",
    "genre_ids": [
            12,
            28,
            878
        ],
    "id": 299536,
    "original_language": "en",
    "original_title": "Avengers: Infinity War",
    "overview": "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
    "popularity": 228.118,
    "poster_path": "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    "release_date": "2018-04-25",
    "title": "Avengers: Infinity War",
    "video": false,
    "vote_average": 8.261,
    "vote_count": 27250
  }
]

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
  movieObjects.forEach(movie => {
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