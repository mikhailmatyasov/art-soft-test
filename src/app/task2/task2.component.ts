import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { CommentModel } from "./comment/comment.model"

@Component({
  selector: 'task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.scss']
})
export class Task2Component implements OnInit {

    public commentsTree: CommentModel[] = [];

    constructor (private http: HttpClient) {}

    ngOnInit(): void {
        this.http.get <any> ("/assets/comments.json").subscribe (data => {
         
          let dataArray = data.comments as any[];
          let comments: CommentModel[] = [];
          dataArray.forEach (value => {
            comments.push ({
              id: value["id"],
              parentId: value["parent_id"],
              authorName: value["author_name"],
              dateTime: value["date time"],
              body: value["body"],
              children: [],
              replies: []
            })
          });

          comments.forEach (child => {
            if (child.parentId === "") {
              this.commentsTree.push (child);
              this.AddChildren (child, comments);
            }
          });
        });
    }


    private AddChildren (parent: CommentModel, comments: CommentModel[])
    {
      comments.forEach (child => {
        if (child.parentId === parent.id) {
          parent.children.push (child);
        }
      });
      parent.children.forEach (child => {
        this.AddChildren (child, comments);
      });
    }
}
