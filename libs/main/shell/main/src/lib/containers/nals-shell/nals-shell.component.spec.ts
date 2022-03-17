import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NalsShellComponent } from './nals-shell.component';

describe('NalsShellComponent', () => {
  let component: NalsShellComponent;
  let fixture: ComponentFixture<NalsShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NalsShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NalsShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
