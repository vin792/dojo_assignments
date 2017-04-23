import { Component, OnInit } from '@angular/core';
import { WidgetService } from '../widget.service';
import { Widget } from '../widget';

@Component({
  selector: 'app-widget-create',
  templateUrl: './widget-create.component.html',
  styleUrls: ['./widget-create.component.css']
})
export class WidgetCreateComponent implements OnInit {

  public newWidget: Widget = new Widget();

  constructor(private _widgetService: WidgetService) { }

  ngOnInit() {
  }

  onSubmit() {
    this._widgetService.create(this.newWidget);
    this.newWidget = new Widget();
  }

}
