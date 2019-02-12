import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-component',
  templateUrl: './server-component.component.html',
  styles: [`
  .online {
color: white;
  }
  `]
})
export class ServerComponentComponent implements OnInit {

  serverId: number = 10;
  serverStatus: string = 'offline';

  getServerStatus(): string {
    return this.serverStatus;
  }

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getColor(): string {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  ngOnInit() {
  }

}
