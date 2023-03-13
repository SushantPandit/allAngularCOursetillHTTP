import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  userActivated: boolean = false;
  activatedSub: Subscription;
  constructor(private user: UserService) {}

  ngOnInit() {
    this.activatedSub = this.user.activatedEmitter.subscribe((didActivate) => {
      this.userActivated = didActivate;
    });
  }

  ngOnDestroy(): void {
    this.activatedSub.unsubscribe();
  }
}
