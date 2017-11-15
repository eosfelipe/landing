import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    let background = $(".background").fadeShow({
      correctRatio: true,
      shuffle: true,
    	speed: 2500,
    	images: ['assets/images/bg-image.jpg',
    			     'assets/images/bg-image-1.jpg']
    });
    console.log(background);
  }
}
