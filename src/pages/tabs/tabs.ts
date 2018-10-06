import { Component } from '@angular/core';

import { PendingPage } from '../pending/pending.component';
import { FinishedPage } from '../finished/finished.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PendingPage;
  tab2Root = FinishedPage;

  constructor() {

  }
}
