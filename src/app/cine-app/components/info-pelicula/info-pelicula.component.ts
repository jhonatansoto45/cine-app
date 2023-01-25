import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from '../../interface/cine-app.interface';

@Component({
  selector: 'app-info-pelicula',
  templateUrl: './info-pelicula.component.html',
  styleUrls: ['./info-pelicula.component.scss'],
})
export class InfoPeliculaComponent implements OnInit {
  @Input() movie: Pelicula = {
    description: '',
    director: [],
    genre: [],
    id: '',
    image: '',
    imdbid: '',
    rank: 0,
    rating: '',
    thumbnail: '',
    title: '',
    trailer: '',
    writers: [],
    year: 0,
  };

  constructor() {}

  ngOnInit(): void {}
}
