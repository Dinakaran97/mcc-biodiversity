import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flora',
  templateUrl: './flora.component.html',
  styleUrls: ['./flora.component.css']
})
export class FloraComponent implements OnInit {
 imageSrc='assets/images/Mccwhite.png';
  constructor() { }

  ngOnInit(): void {
  }

}
