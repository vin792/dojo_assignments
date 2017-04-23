import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Topic } from '../../topic';
import { TopicService } from '../../topic.service';

@Component({
  selector: 'app-topic-dashboard-create',
  templateUrl: './topic-dashboard-create.component.html',
  styleUrls: ['./topic-dashboard-create.component.css']
})
export class TopicDashboardCreateComponent implements OnInit {

  public newTopic: Topic = new Topic()
  @Output() newTopicAdded = new EventEmitter();

  constructor(private _topicService: TopicService) { }

  ngOnInit() {
  }

  onSubmit() {
    this._topicService.addTopic(this.newTopic)
      .subscribe(
        (data: Response) => {},
        (error: any) => console.log(error),
        () => {
          this.newTopicAdded.emit();
          this.newTopic = new Topic();
        });



    
  }

}
