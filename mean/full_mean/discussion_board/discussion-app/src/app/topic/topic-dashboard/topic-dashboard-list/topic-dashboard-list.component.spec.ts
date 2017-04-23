import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicDashboardListComponent } from './topic-dashboard-list.component';

describe('TopicDashboardListComponent', () => {
  let component: TopicDashboardListComponent;
  let fixture: ComponentFixture<TopicDashboardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicDashboardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicDashboardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
