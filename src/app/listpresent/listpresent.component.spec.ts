import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpresentComponent } from './listpresent.component';

describe('ListpresentComponent', () => {
  let component: ListpresentComponent;
  let fixture: ComponentFixture<ListpresentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListpresentComponent]
    });
    fixture = TestBed.createComponent(ListpresentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
