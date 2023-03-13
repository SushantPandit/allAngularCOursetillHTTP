import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  ViewEncapsulation,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated, // None, Native, ShadowDom, Emulated
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input('srvElement') element: { type: string; name: string; content: string };
  @Input() name: string;
  @ViewChild('heading', { static: true }) header: ElementRef;
  @ContentChild('contentParagraph', { static: true})
  contentParagraph: ElementRef;

  constructor() {
    console.log('constructur called!!!');
  }

  ngOnChanges(changes: any) {
    console.log('ngOnChanges called!!!');
    console.log(changes);
    console.log('Text of Heading  ' + this.header.nativeElement.textContent);
    console.log(
      'Text of para from appComponent ng-child---   ' +
        this.contentParagraph.nativeElement.textContent
    );
  }

  ngOnInit(): void {
    console.log('ngOnInit called!!!');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck Called!!');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit Called!!');
    console.log(
      'Text of para from appComponent ng-child---   ' +
        this.contentParagraph.nativeElement.textContent
    );
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked Called!!');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit Called!!');
    console.log('Text of Heading  ' + this.header.nativeElement.textContent);
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked Called!!');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy Called!!');
  }
}
