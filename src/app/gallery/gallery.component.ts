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
     "url": './assets/images/One.jpg'
  },
  {
     "ID": "2",
     "url": './assets/images/Two.jpg'
  } ,
  {
    "ID": "3",
    "url": './assets/images/v1.jpg'
 } ,
 {
  "ID": "4",
  "url": './assets/images/v2.jpg'
} ,
{
  "ID": "5",
  "url": './assets/images/v3.jpg'
} ,
];


}