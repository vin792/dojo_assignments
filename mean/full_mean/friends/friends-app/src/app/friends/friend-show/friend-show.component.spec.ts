import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendShowComponent } from './friend-show.component';

describe('FriendShowComponent', () => {
  let component: FriendShowComponent;
  let fixture: ComponentFixture<FriendShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
