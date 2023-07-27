// lol this doesn't work because import/export and module/require aren't available for clientside

import { Movie } from './Movie';
import { MovieOption } from './MovieOption';

import singleMovie from 'movie.json';
import multipleMovies from 'movieOption.json';

const test = JSON.parse(singleMovie);

console.log(test);