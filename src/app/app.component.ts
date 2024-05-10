import { Component, inject } from '@angular/core';
import { CommonModule, DOCUMENT, ViewportScroller } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Observable, fromEvent, map } from 'rxjs';

import { PageHeaderComponent } from './components/page-header/page-header.component';
import { PageFooterComponent } from './components/page-footer/page-footer.component';
import { ScrollUpComponent } from './components/scroll-up/scroll-up.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    PageHeaderComponent,
    PageFooterComponent,
    ScrollUpComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'data-analytics-poc';

  private readonly document = inject(DOCUMENT);
  private readonly viewport = inject(ViewportScroller);

  readonly showScroll$: Observable<boolean> = fromEvent(
    this.document, 'scroll'
    ).pipe(
      map(() => this.viewport.getScrollPosition()?.[1] > 0)
  );

  onScrollToTop(): void {
    this.viewport.scrollToPosition([0, 0]);
  }
}
