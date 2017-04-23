import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicDetailsAnswerComponent } from './topic-details-answer.component';

describe('TopicDetailsAnswerComponent', () => {
  let component: TopicDetailsAnswerComponent;
  let fixture: ComponentFixture<TopicDetailsAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicDetailsAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicDetailsAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
