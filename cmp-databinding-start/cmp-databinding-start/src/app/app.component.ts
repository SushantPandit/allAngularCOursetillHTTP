import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements = [
    { type: 'server', name: 'Testserver', content: 'just a test!' },
  ];

  onServerAdded(serverData: { serverName: string; serverContaient: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContaient,
    });
  }

  onBlueprintAdded(bluePrintData: {
    serverName: string;
    serverContaient: string;
  }) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintData.serverName,
      content: bluePrintData.serverContaient,
    });
  }

  onChangesFirst() {
    this.serverElements[0].name = 'Changed!';
  }

  onDestoryFirst() {
    this.serverElements.splice(0, 1);
  }
}
