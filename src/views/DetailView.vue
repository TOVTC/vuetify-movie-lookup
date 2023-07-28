<script setup>
import { onMounted, ref } from 'vue';
import AppList from '@/components/AppList.vue';
import MediaService from '@/services/MediaService.js';

const film = ref(null);
const movie = ref(null);
const recFilms = ref(null);
const simFilms = ref(null);

const props = defineProps({
  id: {
    type: String,
    required: true,
  }
});

class Movie {
  constructor(id, title, originalTitle, posterPath, language, releaseDate, runtime, tagline, homepage, overview, genres, languages, productionCompanies) {
      this.id = id,
      this.title = title,
      this.originalTitle = originalTitle && originalTitle !== 'null' ? originalTitle : '',
      this.posterPath = posterPath,
      this.language = language && language !== 'null' ? language : '',
      this.releaseDate = releaseDate && releaseDate !== 'null' ? releaseDate : '',
      this.runtime = runtime && runtime !== 'null' && runtime !== 0 ? runtime : 0,
      this.tagline = tagline && tagline !== 'null' ? tagline : '',
      this.homepage = homepage && homepage !== 'null' ? homepage : '',
      this.overview = overview && overview !== 'null' ? overview : '',
      this.genres = genres,
      this.languages = languages,
      this.productionCompanies = productionCompanies
  }
}

function generatePosterPath(path) {
  if (!path || path === 'null' || path.trim().length === 0) {
    return '../favicon.png';
  } 
  return `https://image.tmdb.org/t/p/original${path}`;
}

function runtime(runtime) {
  if (runtime === 0) {
    return '';
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

onMounted(async () => {
  let details = await MediaService.getDetails(props.id)
  let recommended = await MediaService.getRecommended(props.id)
  let similar = await MediaService.getSimilar(props.id)
  if (!details || !recommended || !similar) {
      alert('something went wrong')
      return
  } else {
      film.value = details.data
      recFilms.value = recommended.data.results
      simFilms.value = similar.data.results
  }

  movie.value = new Movie(
    film.value.id,
    film.value.title,
    film.value.original_title,
    generatePosterPath(film.value.poster_path),
    film.value.original_language,
    film.value.release_date,
    runtime(film.value.runtime),
    film.value.tagline,
    film.value.homepage,
    film.value.overview,
    parseObjects('name', film.value.genres),
    parseObjects('english_name', film.value.spoken_languages),
    parseObjects('name', film.value.production_companies)
  );
});

</script>

<template>
  <v-container class="fill-height" fluid>
    <v-responsive class="align-center fill-height">
      <!-- row 1 - title -->
      <v-row v-if="film" justify="center" class="align-end my-5">
        <v-spacer />
        <v-col cols="12" sm="11">
          <h2 class="text-h4 font-weight-bold text-center text-md-left">{{ movie.title }}</h2>        
        </v-col>
        <v-spacer />
      </v-row>
      <!-- row 2 - movie poster & details -->
      <v-row v-if="film" class="my-5 align-end">
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
      <v-row v-if="simFilms && recFilms" class="my-5">
        <v-spacer />
        <v-col cols="11" md="5" lg="4">
          <h3 class="text-h5 font-weight-bold">Recommended Films</h3>
          <AppList :results="recFilms" />
        </v-col>
        <v-spacer />
        <v-col cols="11" md="5" lg="4">
          <h3 class="text-h5 font-weight-bold">Similar Films</h3>
          <AppList :results="simFilms" />
        </v-col>
        <v-spacer />
      </v-row>
    </v-responsive>
  </v-container>
</template>