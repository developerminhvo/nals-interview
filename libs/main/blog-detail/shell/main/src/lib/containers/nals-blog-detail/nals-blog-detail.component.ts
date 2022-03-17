import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'nals-blog-detail',
  templateUrl: './nals-blog-detail.component.html',
  styleUrls: ['./nals-blog-detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NalsBlogDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
