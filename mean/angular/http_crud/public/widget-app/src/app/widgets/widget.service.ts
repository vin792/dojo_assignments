import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs';
import { Widget } from './widget';

@Injectable()
export class WidgetService {

  public widgets: Array<Widget> = [];
  public showEdit: Boolean = false;

  constructor(private _http: Http) { 
    this.index();
  }

  index() {
    this._http.get('/widgets.json')
      .map((response: Response) => response.json())
      .subscribe(
        (response) => {this.widgets = response},
        (error: any) => console.log(error))
  }

  create(newWidget: Widget) {
    JSON.stringify(newWidget);
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this._http.post('/addwidget.json', newWidget, { headers: headers})
      .subscribe(
        (data: Response) => console.log(data),
        (error: any) => console.log(error),
        () => this.index());
  }
  
  delete(widget: Widget) {
    let widgetID = widget._id;
    let url = "/removewidget/" + widgetID + "/.json";
    this._http.delete(url)
      .subscribe(
        (data: Response) => console.log(data),
        (error: any) => console.log(error),
        () => this.index());
  }

  retrieve(widget) {
    const i = this.widgets.indexOf(widget);
    return this.widgets[i].title;
  }

  update(newWidgetTitle: string, updateWidget: Widget) {
    let url: string= "/updatewidget/" + updateWidget._id + "/.json"
    let widgetTitle: object= {title: newWidgetTitle}; 
    this._http.patch(url, widgetTitle)
      .subscribe(
        (data: Response) => console.log(data),
        (error: any) => console.log(error),
        () => this.index());
  }
}
