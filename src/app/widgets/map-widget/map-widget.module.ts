import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LeafletModule } from "@asymmetrik/ngx-leaflet";

import { WidgetBaseComponentModule, WidgetModule } from "../utilities";
import { MapWidgetComponent } from "./map-widget.component";

@NgModule({
  declarations: [MapWidgetComponent],
  imports: [WidgetBaseComponentModule, LeafletModule],
})
export class MapWidgetModule extends WidgetModule {
  static entry = MapWidgetComponent;
}
