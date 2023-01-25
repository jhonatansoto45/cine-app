import { Injectable } from '@angular/core';
import { ImageToPath } from '../interface/cine-app.interface';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  posters: ImageToPath[] = [
    {
      path: '../../../assets/images/poster/avengers.jpg',
    },
    {
      path: '../../../assets/images/poster/deadpool.jpeg',
    },
    {
      path: '../../../assets/images/poster/demonio.jpg',
    },
    {
      path: '../../../assets/images/poster/duna.jpg',
    },
    {
      path: '../../../assets/images/poster/halloween.jpg',
    },
    {
      path: '../../../assets/images/poster/spider.jpg',
    },
    {
      path: '../../../assets/images/poster/topgun.jpg',
    },
  ];

  constructor() {}
}
