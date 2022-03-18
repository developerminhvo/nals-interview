import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfig, APP_CONFIG } from '@nals-interview-test/main/shared/data-access/app-config';
import { IBlogDetail } from '@nals-interview-test/main/blog-detail/share/data-access/store';

@Injectable({ providedIn: 'root' })
export class NalsBlogDetailApi {
  constructor(
    protected readonly httpClient: HttpClient,
    @Inject(APP_CONFIG) protected readonly appConfig: AppConfig) {}

  public getBlogDetailApi(blogId: string): Observable<{data: IBlogDetail}> {
    return this.httpClient.get<{data: IBlogDetail}>(`${this.appConfig.baseURL}/api/v2/blogs/${blogId}`);
  }
}
