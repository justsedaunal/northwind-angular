import { Directive , Input,TemplateRef ,ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appMultiple]'
})
export class AppMultipleDirective {



  constructor(private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef) { }

    @Input() set appMultiple(num: number) {
      for (let i = 0; i < num; i++)
        this.viewContainerRef.createEmbeddedView(this.templateRef);
    }

}
