import { Type } from "@angular/core";

export abstract class WidgetModule {
  entry!: Type<unknown>;
}

export function isWidgetModule(object: any): object is WidgetModule {
  return object?.entry !== undefined;
}
