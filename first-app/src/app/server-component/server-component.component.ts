import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-component',
  templateUrl: './server-component.component.html',
  styleUrls: ['./server-component.component.css']
})
export class ServerComponentComponent implements OnInit {

  serverId: number = 10;
  serverStatus: string = 'offline';

  getServerStatus(): string {
    return this.serverStatus;
  }

  constructor() { }

  ngOnInit() {
  }

}
