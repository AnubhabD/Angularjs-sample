import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  title = 'Radio button in Angular';
  selectedButton: string = 'fruits';

  constructor() {}

  options = {
    fruits: [
      {
        item: 'Orange',
        img: 'https://freepngimg.com/thumb/orange/19-orange-png-image-download-thumb.png',
      },
      {
        item: 'Apple',
        img: 'https://freepngimg.com/thumb/apple/9-apple-png-image-thumb.png',
      },

      {
        item: 'Banana',
        img: 'https://freepngimg.com/thumb/banana/8-banana-png-image-thumb.png',
      },
    ],
    vegetables: [
      {
        item: 'Potato',
        img: 'https://freepngimg.com/thumb/potato/7-potato-png-images-pictures-download-thumb.png',
      },
      {
        item: 'Tomato',
        img: 'https://freepngimg.com/thumb/tomato/6-tomato-png-image-thumb.png',
      },

      {
        item: 'Brinjal',
        img: 'https://freepngimg.com/thumb/eggplant/14-eggplant-png-images-download-thumb.png',
      },
    ],
  };

  ngOnInit(): void {}
}