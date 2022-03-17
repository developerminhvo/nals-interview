import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'nals-shell',
  templateUrl: './nals-shell.component.html',
  styleUrls: ['./nals-shell.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NalsShellComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
