import { Component } from '@angular/core';

import { FindPage } from '../find/find';
import { NeighborPage } from '../neighbor/neighbor';
import { HomePage } from '../home/home';
import { MePage } from '../me/me';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FindPage;
  tab3Root = NeighborPage;
  tab4Root = MePage;

  constructor() {

  }
}
