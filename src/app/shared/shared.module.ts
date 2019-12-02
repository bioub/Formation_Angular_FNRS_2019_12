import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ClockComponent } from "./clock/clock.component";
import { SelectComponent } from "./select/select.component";

@NgModule({
  declarations: [ClockComponent, SelectComponent],
  imports: [CommonModule],
  exports: [ClockComponent, SelectComponent, CommonModule, FormsModule]
})
export class SharedModule {}
