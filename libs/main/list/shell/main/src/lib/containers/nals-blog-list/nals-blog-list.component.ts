import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'nals-blog-list',
  templateUrl: './nals-blog-list.component.html',
  styleUrls: ['./nals-blog-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NalsBlogListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
