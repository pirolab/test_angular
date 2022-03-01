/**
 * @fileoverview added by tsickle
 * Generated from: lib/carousel-slide/carousel-slide.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
export class MatCarouselSlideComponent {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.overlayColor = '#00000040';
        this.hideOverlay = false;
        this.disabled = false; // implements ListKeyManagerOption
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.image) {
            this.image = this.sanitizer.bypassSecurityTrustStyle(`url("${this.image}")`);
        }
    }
}
MatCarouselSlideComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-carousel-slide',
                template: "<ng-template>\r\n  <div class=\"carousel-slide\" [style.background-image]=\"image\">\r\n    <div class=\"carousel-slide-content\"><ng-content></ng-content></div>\r\n    <div\r\n      *ngIf=\"!hideOverlay\"\r\n      class=\"carousel-slide-overlay\"\r\n      [style.background-color]=\"overlayColor\"\r\n    ></div>\r\n  </div>\r\n</ng-template>\r\n",
                styles: [".carousel-slide{background-position:50%;background-repeat:no-repeat;background-size:cover}.carousel-slide,.carousel-slide-overlay{height:100%;position:absolute;width:100%;z-index:auto}.carousel-slide-content{height:100%;position:absolute;width:100%;z-index:1}"]
            }] }
];
/** @nocollapse */
MatCarouselSlideComponent.ctorParameters = () => [
    { type: DomSanitizer }
];
MatCarouselSlideComponent.propDecorators = {
    image: [{ type: Input }],
    overlayColor: [{ type: Input }],
    hideOverlay: [{ type: Input }],
    disabled: [{ type: Input }],
    templateRef: [{ type: ViewChild, args: [TemplateRef,] }]
};
if (false) {
    /** @type {?} */
    MatCarouselSlideComponent.prototype.image;
    /** @type {?} */
    MatCarouselSlideComponent.prototype.overlayColor;
    /** @type {?} */
    MatCarouselSlideComponent.prototype.hideOverlay;
    /** @type {?} */
    MatCarouselSlideComponent.prototype.disabled;
    /** @type {?} */
    MatCarouselSlideComponent.prototype.templateRef;
    /** @type {?} */
    MatCarouselSlideComponent.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwtc2xpZGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY2Fyb3VzZWwvc3JjL2xpYi9jYXJvdXNlbC1zbGlkZS9jYXJvdXNlbC1zbGlkZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFFTCxXQUFXLEVBQ1gsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQWEsTUFBTSwyQkFBMkIsQ0FBQztBQVNwRSxNQUFNLE9BQU8seUJBQXlCOzs7O0lBU3BDLFlBQW1CLFNBQXVCO1FBQXZCLGNBQVMsR0FBVCxTQUFTLENBQWM7UUFOMUIsaUJBQVksR0FBRyxXQUFXLENBQUM7UUFDM0IsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsYUFBUSxHQUFHLEtBQUssQ0FBQyxDQUFDLGtDQUFrQztJQUtwRSxDQUFDOzs7O0lBRU0sUUFBUTtRQUNiLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQyxRQUFRLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO1NBQzlFO0lBQ0gsQ0FBQzs7O1lBckJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5Qix1V0FBOEM7O2FBRS9DOzs7O1lBUlEsWUFBWTs7O29CQVdsQixLQUFLOzJCQUNMLEtBQUs7MEJBQ0wsS0FBSzt1QkFDTCxLQUFLOzBCQUVMLFNBQVMsU0FBQyxXQUFXOzs7O0lBTHRCLDBDQUFpQzs7SUFDakMsaURBQTJDOztJQUMzQyxnREFBb0M7O0lBQ3BDLDZDQUFpQzs7SUFFakMsZ0RBQTZEOztJQUVqRCw4Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXN0S2V5TWFuYWdlck9wdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcclxuaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVTdHlsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5cclxuaW1wb3J0IHsgTWF0Q2Fyb3VzZWxTbGlkZSB9IGZyb20gJy4vY2Fyb3VzZWwtc2xpZGUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtYXQtY2Fyb3VzZWwtc2xpZGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJvdXNlbC1zbGlkZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY2Fyb3VzZWwtc2xpZGUuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWF0Q2Fyb3VzZWxTbGlkZUNvbXBvbmVudFxyXG4gIGltcGxlbWVudHMgTGlzdEtleU1hbmFnZXJPcHRpb24sIE1hdENhcm91c2VsU2xpZGUsIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgcHVibGljIGltYWdlOiBTYWZlU3R5bGU7XHJcbiAgQElucHV0KCkgcHVibGljIG92ZXJsYXlDb2xvciA9ICcjMDAwMDAwNDAnO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBoaWRlT3ZlcmxheSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBkaXNhYmxlZCA9IGZhbHNlOyAvLyBpbXBsZW1lbnRzIExpc3RLZXlNYW5hZ2VyT3B0aW9uXHJcblxyXG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYpIHB1YmxpYyB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PjtcclxuICAgIFxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikge1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaW1hZ2UpIHtcclxuICAgICAgdGhpcy5pbWFnZSA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZShgdXJsKFwiJHt0aGlzLmltYWdlfVwiKWApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=