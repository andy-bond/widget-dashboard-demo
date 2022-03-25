import { Type } from "@angular/core";

export interface Widget {
  id: string;
  import: () => Promise<Type<unknown>>
}
