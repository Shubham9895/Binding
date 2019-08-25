import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bindingdemo1Component } from './bindingdemo1.component';

describe('Bindingdemo1Component', () => {
  let component: Bindingdemo1Component;
  let fixture: ComponentFixture<Bindingdemo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bindingdemo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bindingdemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
