import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.html',
})
export default class HomePage {
  readonly isAnnual = signal(true);

  setBilling(annual: boolean): void {
    this.isAnnual.set(annual);
  }
}
