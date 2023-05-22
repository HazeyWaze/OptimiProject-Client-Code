import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdwnItemComponent } from './dropdwn-item.component';

describe('DropdwnItemComponent', () => {
  let component: DropdwnItemComponent;
  let fixture: ComponentFixture<DropdwnItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdwnItemComponent]
    });
    fixture = TestBed.createComponent(DropdwnItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
