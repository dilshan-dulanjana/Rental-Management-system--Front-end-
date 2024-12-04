// src/app/shared/directives/active-link.directive.ts
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Directive({
  selector: '[appActiveLink]'
})
export class ActiveLinkDirective {
  @Input('appActiveLink') targetRoute!: string;

  constructor(private router: Router, private el: ElementRef, private renderer: Renderer2) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.urlAfterRedirects === this.targetRoute) {
          this.renderer.addClass(this.el.nativeElement, 'active');
        } else {
          this.renderer.removeClass(this.el.nativeElement, 'active');
        }
      }
    });
  }
}
