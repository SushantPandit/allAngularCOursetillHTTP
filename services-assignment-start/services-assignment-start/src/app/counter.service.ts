export class CounterService {
  i = 0;
  showAlert() {
    this.i++;
    alert("No of time user changes to Active or Inactive : " + this.i);
  }
}
