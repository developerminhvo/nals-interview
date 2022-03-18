import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { NalsMainBlogDetailStore } from '@nals-interview-test/main/blog-detail/share/data-access/store';

@Component({
  selector: 'nals-interview-test-blog-detail',
  templateUrl: './nals-blog-detail.component.html',
  styleUrls: ['./nals-blog-detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NalsMainBlogDetailStore],
})
export class NalsBlogDetailComponent {
  readonly vm$ = this.nalsMainBlogDetailStore.vm$;

  constructor(
    protected readonly nalsMainBlogDetailStore: NalsMainBlogDetailStore
  ) { 
    // EMTPU
  }

}
