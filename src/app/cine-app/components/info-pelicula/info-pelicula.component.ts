import {
  Component,
  OnInit,
  OnChanges,
  Input,
  SimpleChanges,
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Pelicula } from '../../interface/cine-app.interface';

@Component({
  selector: 'app-info-pelicula',
  templateUrl: './info-pelicula.component.html',
  styleUrls: ['./info-pelicula.component.scss'],
})
export class InfoPeliculaComponent implements OnChanges, OnInit {
  video!: SafeResourceUrl;

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

  constructor(private sanitazer: DomSanitizer) {}

  ngOnChanges(changes: SimpleChanges): void {
    if ('movie' in changes && this.movie) {
      this.video = this.sanitazer.bypassSecurityTrustResourceUrl(
        this.movie.trailer
      );
    }
  }

  ngOnInit(): void {}
}
