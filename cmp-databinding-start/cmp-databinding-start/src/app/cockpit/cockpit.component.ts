import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContaient: string;
  }>();
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{
    serverName: string;
    serverContaient: string;
  }>();
  newServerContent: any;
  // newServerName: any;

  @ViewChild('serverContentInput', { static: true })
  serverContentInput: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  onAddServer(serverName: HTMLInputElement) {
    console.log(this.serverContentInput);
    this.serverCreated.emit({
      serverName: serverName.value,
      serverContaient: this.serverContentInput.nativeElement.value,
    });
  }

  onAddBlueprint(serverName: HTMLInputElement) {
    this.bluePrintCreated.emit({
      serverName: serverName.value,
      serverContaient: this.serverContentInput.nativeElement.value,
    });
  }
}
