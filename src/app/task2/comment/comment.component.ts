import { Component, Input } from "@angular/core";
import { CommentModel } from "./comment.model"

@Component({
  selector: 'comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {

    @Input() public data: CommentModel;
    constructor () {}


    onReply() {
      this.data.replies.push ("");
    }
}
