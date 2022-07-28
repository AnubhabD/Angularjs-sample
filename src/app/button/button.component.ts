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
        item: 'orange',
        img: 'https://freepngimg.com/thumb/orange/19-orange-png-image-download-thumb.png',
      },
      {
        item: 'apple',
        img: 'https://freepngimg.com/thumb/apple/9-apple-png-image-thumb.png',
      },

      {
        item: 'banana',
        img: 'https://freepngimg.com/thumb/banana/8-banana-png-image-thumb.png',
      },
    ],
    vegetables: [
      {
        item: 'potato',
        img: 'https://freepngimg.com/thumb/potato/7-potato-png-images-pictures-download-thumb.png',
      },
      {
        item: 'tomato',
        img: 'https://freepngimg.com/thumb/tomato/6-tomato-png-image-thumb.png',
      },

      {
        item: 'brinjal',
        img: 'https://freepngimg.com/thumb/eggplant/14-eggplant-png-images-download-thumb.png',
      },
    ],
  };

  ngOnInit(): void {}
}