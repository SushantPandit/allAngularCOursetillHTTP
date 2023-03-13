import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  oddArray = [];
  evenArray = [];

  appCompGameInit(event: any) {
    console.log(event);
    if (event.number % 2 === 0) {
      this.evenArray.push(event.number);
    } else {
      this.oddArray.push(event.number);
    }
  }
}
