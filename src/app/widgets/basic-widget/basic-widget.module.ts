import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { WidgetBaseComponentModule, WidgetModule } from "../utilities";
import { BasicWidgetComponent } from "./basic-widget.component";

@NgModule({
  declarations: [BasicWidgetComponent],
  imports: [WidgetBaseComponentModule],
})
export class BasicWidgetModule extends WidgetModule {
  static entry = BasicWidgetComponent;
}
