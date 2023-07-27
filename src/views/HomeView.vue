<script setup>


    import { ref } from 'vue';

    const searchTerm = ref('');
    const validate = [
      () => {
          if (searchTerm.value.trim().length === 0) {
          return 'You must enter a valid search term';
        }
        return true;
      }
    ]

    function submit() {
      // figure out how to link validation function to submit function
      if (searchTerm.value.trim().length === 0) {
          return
        }
      console.log(searchTerm.value);
    }
</script>

<template>
  <v-container class="fill-height" fluid>
    <v-responsive class="align-center text-center fill-height">
      <v-row>
        <v-col cols="12" class="text-center">
          <v-icon icon="mdi-movie-search" size="200" color="light-blue" class="ma-5" />
        </v-col>
      </v-row>
      <v-row>
        <v-spacer />
        <v-col cols="6" class="text-center">
          <v-form @submit.prevent="submit">
            <v-text-field
              :rules="validate"
              v-model="searchTerm"
              label="Search for a movie"
              required
            />
            <v-btn type="submit" class="ma-3">Submit</v-btn>
          </v-form>
        </v-col>
        <v-spacer />
      </v-row>
    </v-responsive>
  </v-container>
</template>