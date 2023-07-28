<script setup>
import { onMounted, ref } from 'vue';
import { data } from '../assets/data.js';

const movie = ref(null);
const movies = ref([]);
const movieObjects = ref(data);

const props = defineProps({
  id: {
    type: String,
    required: true,
  }
});

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
      this.posterPath = `https://image.tmdb.org/t/p/original${posterPath}` || "",
      this.language = language || "",
      this.releaseDate = releaseDate || "",
      this.runtime = runtime,
      this.tagline = tagline || "",
      this.homepage = homepage || "",
      this.overview = overview || "",
      this.genres = genres,
      this.languages = languages,
      this.productionCompanies = productionCompanies
  }
}

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

function runtime(runtime) {
  if (!runtime || runtime === 0) {
    return "";
  }

  let hours = Math.floor(runtime/60);
  let minutes = runtime % 60;

  return `${hours}h ${minutes}min`;
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
    movieObject.poster_path,
    movieObject.original_language,
    movieObject.release_date,
    runtime(movieObject.runtime),
    movieObject.tagline,
    movieObject.homepage,
    movieObject.overview,
    parseObjects('name', movieObject.genres),
    parseObjects('english_name', movieObject.spoken_languages),
    parseObjects('name', movieObject.production_companies)
  )

  movieObjects.value.forEach(movie => {
    movies.value.push(new MovieOption(
      movie.id,
      generateTitle(movie.title, movie.release_date),
      generatePosterPath(movie.poster_path),
    ));
  });
  console.log(props.id)
});

</script>

<template>
  <v-container class="fill-height" fluid>
    <v-responsive class="align-center fill-height">
      <!-- row 1 - title -->
      <v-row v-if="movie" justify="center" class="align-end my-5">
        <v-spacer />
        <v-col cols="12" sm="11">
          <h2 class="text-h4 font-weight-bold text-center text-md-left">{{ movie.title }}</h2>        
        </v-col>
        <v-spacer />
      </v-row>
      <!-- row 2 - movie poster & details -->
      <v-row v-if="movie" class="my-5 align-end">
        <v-spacer />
        <v-col cols="11" md="5" lg="3">
          <v-img :src="movie.posterPath.length !== 0 ? movie.posterPath : '../favicon.png'"/>
        </v-col>
        <v-spacer />
        <v-col cols="11" md="6" lg="5" class="text-center text-md-left">
          <v-sheet>
            <p v-if="movie.tagline.length > 0" class="my-3 font-italic text-subtitle-1">"{{ movie.tagline }}"</p>
            <p v-if="movie.releaseDate.length > 0" class="text-subtitle-2">Release Date - {{ movie.releaseDate }}</p>
            <p v-if="movie.runtime.length > 0" class="text-subtitle-2">Runtime - {{ movie.runtime }}</p>
            <p v-if="movie.genres.length > 0" class="text-subtitle-2">Genres - {{ movie.genres.join(', ') }}</p>
            <p v-if="movie.language.length > 0" class="text-subtitle-2">Languages ({{ movie.language }}){{ movie.languages.length > 0 ? ` - ${movie.languages.join(', ')}` : "" }}</p>
            <p v-if="movie.productionCompanies.length > 0" class="text-subtitle-2">Production Company - {{ movie.productionCompanies.join(', ') }}</p>
            <a v-if="movie.homepage.length > 0" class="text-subtitle-2" :href="movie.homepage" target="_blank">{{ movie.homepage }}</a>
            <p v-if="movie.overview.length > 0" class="mt-5 text-body-1">{{ movie.overview }}</p>
          </v-sheet>
        </v-col>
        <v-spacer />
      </v-row>
      <!-- row 3 - spacer -->
      <v-row>
        <v-spacer />
          <v-col cols="10">
            <v-divider/>
          </v-col>
        <v-spacer />
      </v-row>
      <!-- row 4 - recommended & similar films -->
      <v-row v-if="movie" class="my-5">
        <v-spacer />
        <v-col cols="11" md="5" lg="4">
          <h3 class="text-h5 font-weight-bold">Recommended Films</h3>
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
        <v-col cols="11" md="5" lg="4">
          <h3 class="text-h5 font-weight-bold">Similar Films</h3>
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