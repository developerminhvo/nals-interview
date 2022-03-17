import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NalsBlogDetailComponent } from './nals-blog-detail.component';

describe('NalsBlogDetailComponent', () => {
  let component: NalsBlogDetailComponent;
  let fixture: ComponentFixture<NalsBlogDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NalsBlogDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NalsBlogDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
