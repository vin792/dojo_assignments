import { Component, OnInit } from '@angular/core';
import { WidgetService } from '../widget.service';
import { Widget } from '../widget';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  public editWidget: Widget;

  constructor(private _widgetService: WidgetService) { }

  ngOnInit() {
  }

  delete(widget) {
    this._widgetService.delete(widget);
  }

  edit(widget) {
    this.editWidget = widget;
    this._widgetService.showEdit = !this._widgetService.showEdit;
  }

}
