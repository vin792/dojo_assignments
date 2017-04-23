import { Component, OnInit, Input } from '@angular/core';
import { WidgetService } from '../widget.service';
import { Widget } from '../widget';

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {

  @Input() widget: Widget; 
  public newWidgetTitle: string;
  
  constructor(private _widgetService: WidgetService) { }

  ngOnInit() {
    this.newWidgetTitle = this._widgetService.retrieve(this.widget);
  }

  saveWidgetTitle() {
    this._widgetService.showEdit = !this._widgetService.showEdit
    this._widgetService.update(this.newWidgetTitle, this.widget);
  }

}
