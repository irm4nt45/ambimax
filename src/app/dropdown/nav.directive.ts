import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core'

@Directive({
    selector: '[appNav]'
})

export class NavDirective{
    @HostBinding('class.ambimaxNav') isShow = false;

    constructor(private _el: ElementRef) { }

    @HostListener('click') toggleOpen(){
        this.isShow = !this.isShow;
        //this._el.nativeElement.querySelector('.menu').classList.toggle('ambimaxNav');
        //this._el.nativeElement.querySelector('.ambimimaxButton').classList.toggle('navButtonClose');
    } 
}

