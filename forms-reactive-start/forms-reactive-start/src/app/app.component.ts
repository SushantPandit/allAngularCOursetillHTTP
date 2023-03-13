import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  forbiddenUserNames = ['Chris', 'Anna'];

  signUpform: FormGroup;

  ngOnInit(): void {
    this.signUpform = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.forbiddenNames.bind(this),
        ]),
        email: new FormControl(
          null,
          [Validators.required, Validators.email],
          this.forbiddenEmails
        ),
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([]),
    });

    // this.signUpform.valueChanges.subscribe((value) => {
    //   console.log(value);
    // });

    // this.signUpform.statusChanges.subscribe((status) => {
    //   console.log(status);
    // });
  }
  onSubmit() {
    console.log(this.signUpform);
  }
  onAddHobby() {
    const controle = new FormControl(null, Validators.required);
    (<FormArray>this.signUpform.get('hobbies')).push(controle);
  }

  getHobbiesData() {
    return (<FormArray>this.signUpform.get('hobbies')).controls;
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUserNames.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
    }
    return null;
  }

  forbiddenEmails(controle: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, react) => {
      setTimeout(() => {
        if (controle.value === 'test12@test.com') {
          resolve({ emailIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 3000);
    });
    return promise;
  }
}
