import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NalsLayoutComponent } from './nals-layout.component';

describe('NalsLayoutComponent', () => {
  let component: NalsLayoutComponent;
  let fixture: ComponentFixture<NalsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NalsLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NalsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
