/* eslint-disable no-unused-vars */
export enum ColumnType {
  TO_WATCH = 'To Watch',
  IN_PROGRESS = 'In Progress',
  PARKED = 'Parked',
  COMPLETED = 'Completed',
}

export enum ItemType {
  MOVIE = 'movie',
  SHOW = 'show',
  ANIME = 'anime',
}
export enum MediaTypeNames {
  ALL = 'all',
  MOVIES = 'movies',
  TV = 'tv',
  ANIME = 'anime',
}

export type MediaType =
  | MediaTypeNames.ALL
  | MediaTypeNames.MOVIES
  | MediaTypeNames.TV
  | MediaTypeNames.ANIME;
