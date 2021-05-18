export class CommentModel {
  id: string;
  parentId: string;
  dateTime: string;
  authorName: string;
  body: string;
  children: CommentModel[];
  replies: string[];
}
