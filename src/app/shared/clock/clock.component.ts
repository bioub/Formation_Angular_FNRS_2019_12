import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  OnDestroy
} from "@angular/core";

@Component({
  selector: "app-clock",
  templateUrl: "./clock.component.html",
  styleUrls: ["./clock.component.scss"]
})
export class ClockComponent implements OnInit, OnChanges, OnDestroy {
  now = new Date();
  @Input() format = "HH:mm:ss";
  @Input() delay = 1000;

  private intervalId;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.now = new Date();
    }, this.delay);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.delay.previousValue && changes.delay.previousValue !== changes.delay.currentValue) {
      clearInterval(this.intervalId);
      this.intervalId = setInterval(() => {
        this.now = new Date();
      }, changes.delay.currentValue);
    }
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
