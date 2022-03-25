import { NgModule } from "@angular/core";

import { NgtCoreModule } from "@angular-three/core";
import { NgtMeshModule } from '@angular-three/core/meshes';
import { NgtBoxGeometryModule } from '@angular-three/core/geometries';
import {
  NgtAmbientLightModule,
  NgtSpotLightModule,
} from '@angular-three/core/lights';
import { NgtMeshStandardMaterialModule } from '@angular-three/core/materials';

import { WidgetBaseComponentModule, WidgetModule } from "../utilities";
import { CubeWidgetComponent } from "./cube-widget.component";

@NgModule({
  declarations: [CubeWidgetComponent],
  imports: [
    WidgetBaseComponentModule,
    NgtCoreModule,
    NgtMeshModule,
    NgtMeshStandardMaterialModule,
    NgtBoxGeometryModule,
    NgtAmbientLightModule,
    NgtSpotLightModule,
  ],
})
export class CubeWidgetModule extends WidgetModule {
  static entry = CubeWidgetComponent;
}
