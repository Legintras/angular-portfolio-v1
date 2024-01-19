import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyColumnComponent } from './sticky-column.component';

describe('StickyColumnComponent', () => {
  let component: StickyColumnComponent;
  let fixture: ComponentFixture<StickyColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StickyColumnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StickyColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
