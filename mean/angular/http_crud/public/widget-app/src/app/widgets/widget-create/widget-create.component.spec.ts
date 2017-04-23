import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetCreateComponent } from './widget-create.component';

describe('WidgetCreateComponent', () => {
  let component: WidgetCreateComponent;
  let fixture: ComponentFixture<WidgetCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
