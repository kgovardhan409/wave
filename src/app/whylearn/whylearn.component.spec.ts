import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhylearnComponent } from './whylearn.component';

describe('WhylearnComponent', () => {
  let component: WhylearnComponent;
  let fixture: ComponentFixture<WhylearnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhylearnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhylearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
