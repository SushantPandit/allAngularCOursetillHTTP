import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  // signUpform: FormGroup;
  projectForm: FormGroup;

  constructor() {}

  ngOnInit() {
    this.projectForm = new FormGroup({
      projectName: new FormControl(null, [
        Validators.required,
        // this.forbiddenNames.bind(this),
      ],this.forbiddenPname),
      mail: new FormControl(null, [Validators.required, Validators.email]),
      status: new FormControl("Critical"),
    });
  }

  onSubmit() {
    console.log(this.projectForm.value);
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    console.log(control);

    if (control.value === "test") {
      return { nameIsForbidden: true };
    }
    return null;
  }

  forbiddenPname(controle: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, react) => {
      setTimeout(() => {
        if (controle.value === 'test') {
          resolve({ pnameIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
