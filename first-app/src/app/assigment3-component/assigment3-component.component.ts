import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assigment3-component',
  templateUrl: './assigment3-component.component.html',
  styles: [
    `
  .whiteText {
  color: white;
  }
  `]
})

export class Assigment3ComponentComponent implements OnInit {

  logs = [];
  index: number;
  showDetails = false;

  constructor() {
    this.index = 0;
  }

  ngOnInit() {
  }

  onToggleDetails() {
    this.showDetails = !this.showDetails;
    this.logs.push(++this.index + '. Clicked button! ' + new Date());
  }
  
}
