import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.page.html',
  styleUrls: ['./stopwatch.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class StopwatchPage {
  public minutes: number = 0;
  public seconds: number = 0;
  public running: boolean = false;
  private interval: any;

  startStop() {
    if (this.running) {
      clearInterval(this.interval);
    } else {
      this.interval = setInterval(() => {
        this.seconds++;
        if (this.seconds === 60) {
          this.seconds = 0;
          this.minutes++;
        }
      }, 1000);
    }
    this.running = !this.running;
  }

  reset() {
    clearInterval(this.interval);
    this.minutes = 0;
    this.seconds = 0;
    this.running = false;
  }
}