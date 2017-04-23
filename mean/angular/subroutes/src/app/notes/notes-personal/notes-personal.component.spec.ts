import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesPersonalComponent } from './notes-personal.component';

describe('NotesPersonalComponent', () => {
  let component: NotesPersonalComponent;
  let fixture: ComponentFixture<NotesPersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesPersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
