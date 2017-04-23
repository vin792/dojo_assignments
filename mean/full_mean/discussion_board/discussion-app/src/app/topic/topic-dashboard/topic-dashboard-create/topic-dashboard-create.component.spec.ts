import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicDashboardCreateComponent } from './topic-dashboard-create.component';

describe('TopicDashboardCreateComponent', () => {
  let component: TopicDashboardCreateComponent;
  let fixture: ComponentFixture<TopicDashboardCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicDashboardCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicDashboardCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
