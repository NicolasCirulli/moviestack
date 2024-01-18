export const ONE_MOVIE_EXAMPLE = {
  _id: "653035c2c61a4a32bd27249a",
  image: "iiymnlaeeh",
  genres: ["Drama", "Science Fiction", "War"],
  original_language: "en",
  overview: "Caesar and his apes are forced into a deadly conflict...",
  popularity: 66.624,
  release_date: "2017-07-11T00:00:00.000Z",
  title: "War for the Planet of the Apes",
  vote_average: 7.16,
  vote_count: 8048,
  homepage: "http://www.foxmovies.com/movies/war-for-the-planet-of-the-apes",
  revenue: 490719763,
  runtime: 140,
  status: "Released",
  tagline: "For freedom. For family. For the planet.",
  budget: 150000000,
  comments: [],
  __v: 0,
};
export const ALL_MOVIES_EXAMPLE = {
  data: [ONE_MOVIE_EXAMPLE],
  count: 1,
};

export const REQUEST = [
  {
    method: "GET",
    url: "/movies",
    title: "Movies",
    paragraph: "return movies",
    example: ALL_MOVIES_EXAMPLE,
  },
  {
    method: "GET",
    url: "/movies/{id}",
    title: "Movie by id",
    paragraph: "return one movie",
    example: ONE_MOVIE_EXAMPLE,
  },
];

export const MOVIES_SCHEMA = [
  {
    key: "_id",
    type: "string",
    description: "Movie id",
  },
  {
    key: "image",
    type: "string",
    description:
      "The API response provides the image filename, such as 'l5grk77jfx.jpg.' To form the complete URL, prepend it with 'https://moviestack.onrender.com/static/.'",
  },
  {
    key: "genres",
    type: "array",
    description: "Movie genres",
  },
  {
    key: "original_language",
    type: "string",
    description: "Movie original language",
  },
  {
    key: "overview",
    type: "string",
    description: "Movie overview",
  },
  {
    key: "popularity",
    type: "number",
    description: "Movie popularity",
  },
  {
    key: "release_date",
    type: "string",
    description: "Movie release date",
  },
  {
    key: "runtime",
    type: "number",
    description: "Movie runtime",
  },
  {
    key: "status",
    type: "string",
    description: "Movie status",
  },
  {
    key: "tagline",
    type: "string",
    description: "Movie tagline",
  },
  {
    key: "budget",
    type: "number",
    description: "Movie budget",
  },
];

export const THEAD_MOVIES = ["Key", "Type", "Description"];

export const PARAMETERS = [
  {
    key: "title",
    type: "Title of movie",
    description:
      "Search by title. The query is not case-sensitive and does not require an exact match. If the provided title is included in the movie's title, it will be considered a match.",
  },
  {
    key: 'genre',
    type: 'Genre',
    description: "Drama, Science Fiction, War, Adventure, Action, Romance, Comedy, Crime, Thriller, Fantasy, Horror, Animation, Family, Music, Western, Mystery, History",
  },
  {
    key: "page",
    type: "number",
    description: "Add pagination of the results.",
  },
  {
    key: "sort",
    type: "Parameter for sorting",
    description: "title, popularity, release_date, vote_average, budget, revenue",
  },
  {
    key: "order",
    type: "des",
    description: "If included, results will be sorted in descending order.",
  }
];

export const THEAD_PARAMETERS = ["Parameter", "Value", "Description"];
