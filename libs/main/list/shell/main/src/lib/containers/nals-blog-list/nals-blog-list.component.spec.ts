import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NalsBlogListComponent } from './nals-blog-list.component';

describe('NalsBlogListComponent', () => {
  let component: NalsBlogListComponent;
  let fixture: ComponentFixture<NalsBlogListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NalsBlogListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NalsBlogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
