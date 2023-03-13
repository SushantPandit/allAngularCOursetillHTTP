import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"],
})
export class GameControlComponent implements OnInit {
  count = 0;
  @Output() gameStart = new EventEmitter<{ number: number }>();
  @Output() gameStop = new EventEmitter<{ number: number }>();
  intervel: any;

  constructor() {}

  ngOnInit(): void {}

  letGameStart() {
    this.intervel = setInterval(() => {
      this.gameStart.emit({ number: this.count++ });
    }, 1000);
  }

  letGameStop() {
    clearInterval(this.intervel);
  }
}
