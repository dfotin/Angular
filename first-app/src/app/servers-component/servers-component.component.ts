import { Component, OnInit } from '@angular/core';
import { timeout } from 'q';

@Component({
  selector: 'app-servers-component',
  templateUrl: './servers-component.component.html',
  styleUrls: ['./servers-component.component.css']
})
export class ServersComponentComponent implements OnInit {

  allowNewServers: boolean = false;
  serverCreationStatus: string = "No server was created.";
  serverName: string = "testServerName";

  constructor() {
    setTimeout(() => {
      this.allowNewServers = true;
    }, 2000)

  }

  ngOnInit() {
  }

  onCreationStatus() {
    this.serverCreationStatus = "Server was created! Name is "+ this.serverName;
  }
  onUpdateServerName(event: Event) {
    // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
