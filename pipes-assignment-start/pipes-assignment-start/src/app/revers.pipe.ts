import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "revers",
})
export class ReversPipe implements PipeTransform {
  transform(value: string): string {
    let tempStr = value.split("");
    let revStr = tempStr.reverse();
    return revStr.join("");
  }
}
