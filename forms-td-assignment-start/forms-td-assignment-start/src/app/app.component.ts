import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  defaultDDValue = "Advanced";
  user;
  submitted = false;

  onSubmit(form) {
    this.submitted = true;
    console.log(form.value);
    this.user = form.value;
  }
}
