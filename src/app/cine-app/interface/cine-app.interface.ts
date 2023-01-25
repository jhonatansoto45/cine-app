export interface ImageToPath {
  path: string;
}

export interface Pelicula {
  rank:        number;
  title:       string;
  thumbnail:   string;
  rating:      string;
  id:          string;
  year:        number;
  image:       string;
  description: string;
  trailer:     string;
  genre:       string[];
  director:    string[];
  writers:     string[];
  imdbid:      string;
}
