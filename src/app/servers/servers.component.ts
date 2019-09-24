import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'no server was created!';
  serverName = 'defaultServer';
  serverCreated = false;
  servers = ['testServer', 'testServer2'];
  serversDebug = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'server was created!!  name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = ( event.target as HTMLInputElement ).value;
  }
  onAddServer() {
    this.serversDebug.push('Another Server');
  }

  onRemoveServer(id: number) {
    const position = id + 1;
    this.serversDebug.splice(position, 1);
  }
}
