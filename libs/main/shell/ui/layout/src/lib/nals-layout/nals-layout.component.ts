import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'nals-layout',
  templateUrl: './nals-layout.component.html',
  styleUrls: ['./nals-layout.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NalsLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
