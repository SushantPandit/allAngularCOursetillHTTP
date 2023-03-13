import { Component, EventEmitter, Output } from '@angular/core';
import { AccountComponent } from '../account/account.component';
import { AccountService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService],
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{ name: string; status: string }>();

  constructor(
    private loggingService: LoggingService,
    private accountService: AccountService
  ) {
    accountService.statuspdate.subscribe((status: string) =>
      alert('New Status: ' + status)
    );
  }
  //
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  }
}
