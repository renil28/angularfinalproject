import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  appTitle: string = 'Gallery';
  appList: any[] = [ {
     "ID": "1",
     "url": './assets/One.jpg'
  },
  {
     "ID": "2",
     "url": './assets/Two.jpg'
  } ,
  {
    "ID": "3",
    "url": './assets/v1.jpg'
 } ,
 {
  "ID": "4",
  "url": './assets/v2.jpg'
} ,
{
  "ID": "5",
  "url": './assets/v3.jpg'
} ,
];


}