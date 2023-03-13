import { Component, OnInit } from '@angular/core';
import { AccountService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountService],
})
export class AppComponent implements OnInit {
  accounts: { name: string; status: string }[] = [];

  constructor(private accounService: AccountService) {}

  ngOnInit(): void {
    this.accounts = this.accounService.accounts;
  }
  onAccountAdded($event: any) {
    throw new Error('Method not implemented.');
  }
}
