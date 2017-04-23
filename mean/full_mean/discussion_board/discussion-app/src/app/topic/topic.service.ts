import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';
import { Topic } from './topic';

@Injectable()
export class TopicService {

  constructor(private _http: Http) { }

  addTopic(topic: Topic) {
    return this._http.post('/addtopic', topic)
              .map((response: Response) => response.json())
  }

  getTopics() {
    return this._http.get('/gettopics')
              .map((response: Response) => response.json())
  }

  getUser(userID) {
    return this._http.post('/getuser', {id: userID})
              .map((response: Response) => response.json())
  }

  getTopic(topicID) {
    return this._http.post('/gettopic', {id: topicID})
              .map((response: Response) => response.json())
  }

  addAnswer(newAnswer, topicID) {
    var postObject = {answer: newAnswer, myTopicID: topicID}
    return this._http.post('/addanswer', postObject)
              .map((response: Response) => response.json())
  }

  addComment(newComment, answerID, topicID) {
    var postObject = {comment: newComment, myTopicID: topicID, myAnswerID: answerID}
    return this._http.post('/addcomment', postObject)
              .map((response: Response) => response.json())
  }

  upVote(answerID) {
    return this._http.patch('/upvote', {id: answerID})
              .map((response: Response) => response.json())
  }

  downVote(answerID) {
    return this._http.patch('/downvote', {id: answerID})
              .map((response: Response) => response.json())
  }
 }
