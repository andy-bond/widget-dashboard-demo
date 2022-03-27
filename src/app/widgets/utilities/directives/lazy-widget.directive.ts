import {
  AfterViewInit,
  Directive,
  Inject,
  Input,
  ViewContainerRef,
} from '@angular/core';
import { NgModule } from '@angular/core';
import {
  WidgetLoadingComponent,
  WidgetLoadingComponentModule,
  WidgetNotFoundComponent,
  WidgetNotFoundComponentModule
} from '../components';
import { isWidgetModule, WidgetConfiguration } from '../models';
import { WIDGET_CONFIGURATION } from '../tokens';

@Directive({
  selector: '[lazyWidget]',
})
export class LazyWidgetDirective implements AfterViewInit {
  @Input() lazyWidget!: string;

  constructor(
    private viewContainerRef: ViewContainerRef,
    @Inject(WIDGET_CONFIGURATION) private widgetConfiguration: WidgetConfiguration
  ) {
    this.viewContainerRef.createComponent(WidgetLoadingComponent);
  }

  ngAfterViewInit() {
    this.load(this.lazyWidget);
  }

  async load(id: string) {
    // Check if widget exists
    if (id && this.widgetConfiguration.hasOwnProperty(id)) {
      // Get widget from configuration
      const widget = this.widgetConfiguration[id];

      // Import the module
      const module = await widget.import();

      // Check that the module extends our LazyWidget class
      if (isWidgetModule(module)) {
        // Get the component to load
        const component = module.entry;

        // Clear the container
        this.viewContainerRef.clear();

        // Load the component in the container
        const componentRef = this.viewContainerRef.createComponent(
          component
        );

        // Mark for Check
        componentRef.changeDetectorRef.markForCheck();
      }
    } else {
      // Clear Spinner & Show Not Found
      this.viewContainerRef.clear();
      this.viewContainerRef.createComponent(WidgetNotFoundComponent);
    }
  }
}

@NgModule({
  declarations: [LazyWidgetDirective],
  imports: [WidgetLoadingComponentModule, WidgetNotFoundComponentModule],
  exports: [LazyWidgetDirective]
})
export class LazyWidgetDirectiveModule { }

