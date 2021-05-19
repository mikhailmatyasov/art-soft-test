import { AfterViewInit, Component, ElementRef, Input, ViewChild } from "@angular/core";

@Component({
  selector: 'reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.scss']
})
export class ReplyComponent implements AfterViewInit {

    @Input() public value: string;
    @ViewChild ("inputField") inputField : ElementRef;

    ngAfterViewInit(): void {
        this.inputField.nativeElement.focus();
    }

    focusOut() {
      this.inputField.nativeElement.setAttribute ("readonly", "");
    }
}
