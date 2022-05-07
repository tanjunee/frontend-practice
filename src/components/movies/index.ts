export interface Movies {
  results: MovieResult[];
}

export interface MovieResult {
  id: number;
  adult: boolean;
  title: string;
  overview: string;
  posterPath: string;
}
