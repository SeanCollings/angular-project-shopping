import {
  Directive,
  HostListener,
  HostBinding
  // , ElementRef
  // , Renderer2
} from '../../../node_modules/@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click')
  toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  // ================================================================== //
  // MY SOLUTION
  // ================================================================== //
  // clicked = false;
  // @HostBinding('class') classSelect: string;

  // constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  // @HostListener('click')
  // click(eventData: Event) {
  //   if (!this.clicked) {
  //     this.classSelect = 'open';
  //     // this.renderer.addClass(this.elRef.nativeElement, 'open');
  //     this.clicked = true;
  //   } else {
  //     this.classSelect = '';
  //     // this.renderer.removeClass(this.elRef.nativeElement, 'open');
  //     this.clicked = false;
  //   }
  // }

  // ================================================================== //
}
