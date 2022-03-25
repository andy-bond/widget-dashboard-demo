import { InjectionToken } from "@angular/core";
import { WidgetConfiguration } from "../models";

export const WIDGET_CONFIGURATION = new InjectionToken<WidgetConfiguration>(
  'WIDGET_CONFIGURATION'
);
