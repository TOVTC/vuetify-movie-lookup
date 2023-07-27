<script setup>
import { onMounted, ref } from 'vue';

const movie = ref(null);

const movieObject = {
    "genres": [
        {
        "id": 12,
        "name": "Adventure"
        },
        {
        "id": 28,
        "name": "Action"
        },
        {
        "id": 878,
        "name": "Science Fiction"
        }
    ],
    "homepage": "https://www.marvel.com/movies/avengers-infinity-war",
    "id": 299536,
    "original_language": "en",
    "original_title": "Avengers: Infinity War",
    "overview": "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
    "poster_path": "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    "production_companies": [
        {
        "id": 420,
        "logo_path": "/hUzeosd33nzE5MCNsZxCGEKTXaQ.png",
        "name": "Marvel Studios",
        "origin_country": "US"
        }
    ],
    "release_date": "2018-04-25",
    "runtime": 149,
    "spoken_languages": [
        {
        "english_name": "English",
        "iso_639_1": "en",
        "name": "English"
        },
        {
        "english_name": "Xhosa",
        "iso_639_1": "xh",
        "name": ""
        }
    ],
    "tagline": "An entire universe. Once and for all.",
    "title": "Avengers: Infinity War"
};

class Movie {
  constructor(id, title, originalTitle, posterPath, language, releaseDate, runtime, tagline, homepage, overview, genres, languages, productionCompanies) {
      this.id = id,
      this.title = title,
      this.originalTitle = originalTitle || "",
      this.posterPath = posterPath || "",
      this.language = language || "",
      this.releaseDate = releaseDate || "",
      this.runtime = runtime || "",
      this.tagline = tagline || "",
      this.homepage = homepage || "",
      this.overview = overview || "",
      this.genres = genres,
      this.languages = languages,
      this.productionCompanies = productionCompanies
  }
}

function parseObjects(propName, data) {
      let targetValues = [];

      data.forEach(item => {
          targetValues.push(item[propName]);
      });

      return targetValues;
  }

onMounted(() => {
  movie.value = new Movie(
    movieObject.id,
    movieObject.title,
    movieObject.original_title,
    movieObject.posterpath,
    movieObject.original_language,
    movieObject.release_date,
    movieObject.runtime,
    movieObject.tagline,
    movieObject.homepage,
    movieObject.overview,
    parseObjects('name', movieObject.genres),
    parseObjects('english_name', movieObject.spoken_languages),
    parseObjects('name', movieObject.production_companies)
  )
  console.log(movie.value);
});

</script>

<template>
  <v-container class="fill-height" fluid>
    <v-responsive class="align-center text-center fill-height">
      <v-row>
        <v-spacer />
        <v-col cols="6" class="text-center">
          <!-- <v-list
            :items="items"
            item-title=""
            item-value="id"
          >
          </v-list> -->
        </v-col>
        <v-spacer />
      </v-row>
    </v-responsive>
  </v-container>
</template>