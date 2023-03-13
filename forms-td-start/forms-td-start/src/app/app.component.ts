import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  defaultQuestion = 'pet';
  answer: string;
  genders = ['male', 'female'];
  @ViewChild('f') signupForm: NgForm;
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: '',
  };
  submitted = false;
  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData: {
    //     userName: suggestedName,
    //     email: '',
    //   },
    //   secret:'pet',
    //   questionAnswer:'',
    //   gender:'male'
    // });

    this.signupForm.form.patchValue({
      userData: {
        userName: suggestedName,
      },
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log('Submitted!', form);
  // }

  onSubmit(form: NgForm) {
    this.submitted = true;
    console.log(this.signupForm);
    this.user.username = this.signupForm.value.userData.userName;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;

    this.signupForm.reset();
  }
}
