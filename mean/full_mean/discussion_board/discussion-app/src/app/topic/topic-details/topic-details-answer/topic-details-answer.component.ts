import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TopicService } from '../../topic.service';

@Component({
  selector: 'app-topic-details-answer',
  templateUrl: './topic-details-answer.component.html',
  styleUrls: ['./topic-details-answer.component.css']
})
export class TopicDetailsAnswerComponent implements OnInit {

  public newComment = {text: ""};
  @Input() answer;
  @Input() userLogin = "";
  @Output() newCommentAdded = new EventEmitter()
  

  constructor(private _topicService: TopicService) { }

  ngOnInit() {
  }

  addComment(){
    this._topicService.addComment(this.newComment, this.answer._id, this.answer._topic)
      .subscribe(
          (data) => {},
          (error: any) => console.log(error),
          ()=>{
            this.newComment = {text: ""};
            this.newCommentAdded.emit();
          })
    
  }

  upVote(answerID) {
    this._topicService.upVote(answerID)
      .subscribe(
          (data) => {},
          (error: any) => console.log(error),
          ()=>{
            this.newCommentAdded.emit();
          })
  }

  downVote(answerID) {
    this._topicService.downVote(answerID)
      .subscribe(
          (data) => {},
          (error: any) => console.log(error),
          ()=>{
            this.newCommentAdded.emit();
          })
  }

}
