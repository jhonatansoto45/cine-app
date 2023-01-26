import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pelicula } from '../../interface/cine-app.interface';
import { CineAppService } from '../../service/cine-app.service';
import { ImageService } from '../../service/image.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  peliculas: Pelicula[] = [];

  constructor(
    private cineService: CineAppService,
    private posterService: ImageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cineService.scrollTop();
    this.peliculas = this.cineService.data;
    /* this.cineService.getMovies().subscribe((movies) => {
      console.log(movies);

       this.peliculas = movies;
    }); */
  }

  get images() {
    return [...this.posterService.posters];
  }

  cartelera(): void {
    const heightDiv = document.querySelector('.legend')?.clientHeight;

    window.scrollTo({
      behavior: 'smooth',
      top: heightDiv! + 480,
    });
  }

  detallePelicula(index: number): void {
    this.router.navigate(['./peliculas/detalle', index]);
  }
}
