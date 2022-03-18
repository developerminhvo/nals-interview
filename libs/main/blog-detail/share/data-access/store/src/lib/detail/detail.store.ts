import { ComponentStore } from '@ngrx/component-store';
import { IBlogDetail } from './detail.state';
import { NalsBlogDetailApi } from '@nals-interview-test/main/shared/data-access/apis';
import { Observable, pluck, switchMap, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class NalsMainBlogDetailStore extends ComponentStore<IBlogDetail> {
  readonly data$ = this.select((s) => s);

  readonly vm$ = this.select(this.data$, (data) => ({ data }), {
    debounce: true,
  });

  readonly blogIdParams$ = this.route.params.pipe(
    pluck('blogId'),
    // filter((blogId) => !!blogId),
  );

  constructor(
    protected readonly blogDetailApi: NalsBlogDetailApi,
    protected readonly route: ActivatedRoute,
    ) {
    super({
      id: '',
      content: '',
      title: '',
      image: { url: '' },
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    this.getDetail(this.blogIdParams$);
  }

  public readonly getDetail = this.effect(
    (req$: Observable<string>) =>
      req$.pipe(
        switchMap((req) => this.blogDetailApi.getBlogDetailApi(req)),
        tap(({ data }) => {
          this.updateDetail(data);
        })
      )
  );

  public updateDetail = this.updater((state, detail: IBlogDetail) => {
    return { ...state, ...detail };
  });
}
