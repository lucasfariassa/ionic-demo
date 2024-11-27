import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-incremental-counter',
  templateUrl: './incremental-counter.page.html',
  styleUrls: ['./incremental-counter.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class IncrementalCounterPage {
  public count: number = 0;

  increment() {
    this.count++;
  }

  decrement() {
    if (this.count > 0) {
      this.count--;
    }
  }

  reset() {
    this.count = 0;
  }
}