/**
 * @fileoverview added by tsickle
 * Generated from: lib/carousel.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { animate, style, AnimationBuilder } from '@angular/animations';
import { ListKeyManager } from '@angular/cdk/a11y';
import { isPlatformBrowser } from '@angular/common';
import { Component, ContentChildren, ElementRef, EventEmitter, HostListener, Inject, Input, Output, PLATFORM_ID, QueryList, Renderer2, ViewChild } from '@angular/core';
import { interval, BehaviorSubject, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { MatCarouselSlideComponent } from './carousel-slide/carousel-slide.component';
/** @enum {number} */
const Direction = {
    Left: 0,
    Right: 1,
    Index: 2,
};
Direction[Direction.Left] = 'Left';
Direction[Direction.Right] = 'Right';
Direction[Direction.Index] = 'Index';
export class MatCarouselComponent {
    /**
     * @param {?} animationBuilder
     * @param {?} renderer
     * @param {?} platformId
     */
    constructor(animationBuilder, renderer, platformId) {
        this.animationBuilder = animationBuilder;
        this.renderer = renderer;
        this.platformId = platformId;
        this.timings = '250ms ease-in';
        this.hideArrows = true;
        this.hideIndicators = true;
        this.pauseOnHover = true;
        this.color = 'accent';
        this.maintainAspectRatio = true;
        this.proportion = 25;
        this.slideHeight = '100%';
        this.useKeyboard = false;
        this.useMouseWheel = false;
        this.animationStart = new EventEmitter();
        this.change = new EventEmitter();
        this._autoplay = true;
        this.autoplay$ = new Subject();
        this.interval$ = new BehaviorSubject(5000);
        this.slides$ = new BehaviorSubject(null);
        this._maxWidth = 'auto';
        this.maxWidth$ = new Subject();
        this._loop = true;
        this.loop$ = new Subject();
        this._orientation = 'ltr';
        this.orientation$ = new Subject();
        this.timerStop$ = new Subject();
        this.destroy$ = new Subject();
        this.playing = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set autoplay(value) {
        this.autoplay$.next(value);
        this._autoplay = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set interval(value) {
        this.interval$.next(value);
    }
    /**
     * @return {?}
     */
    get loop() {
        return this._loop;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set loop(value) {
        this.loop$.next(value);
        this._loop = value;
    }
    /**
     * @return {?}
     */
    get maxWidth() {
        return this._maxWidth;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set maxWidth(value) {
        this._maxWidth = value;
        this.maxWidth$.next();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set slides(value) {
        this.slides$.next(value);
    }
    /**
     * @return {?}
     */
    get orientation() {
        return this._orientation;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set orientation(value) {
        this.orientation$.next(value);
        this._orientation = value;
    }
    /**
     * @return {?}
     */
    get currentIndex() {
        if (this.listKeyManager) {
            return this.listKeyManager.activeItemIndex;
        }
        return 0;
    }
    /**
     * @return {?}
     */
    get currentSlide() {
        if (this.listKeyManager) {
            return this.listKeyManager.activeItem;
        }
        return null;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.listKeyManager = new ListKeyManager(this.slidesList)
            .withVerticalOrientation(false)
            .withHorizontalOrientation(this._orientation)
            .withWrap(this._loop);
        this.listKeyManager.updateActiveItem(0);
        this.listKeyManager.change
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        () => this.playAnimation()));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.autoplay$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            this.stopTimer();
            this.startTimer(value);
        }));
        this.interval$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            this.stopTimer();
            this.resetTimer(value);
            this.startTimer(this._autoplay);
        }));
        this.maxWidth$
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        () => this.slideTo(0)));
        this.loop$
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        value => this.listKeyManager.withWrap(value)));
        this.orientation$
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        value => this.listKeyManager.withHorizontalOrientation(value)));
        this.slides$
            .pipe(takeUntil(this.destroy$), filter((/**
         * @param {?} value
         * @return {?}
         */
        value => value && value < this.slidesList.length)))
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        value => this.resetSlides(value)));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * @return {?}
     */
    next() {
        this.goto(Direction.Right);
    }
    /**
     * @return {?}
     */
    previous() {
        this.goto(Direction.Left);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    slideTo(index) {
        this.goto(Direction.Index, index);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyUp(event) {
        if (this.useKeyboard && !this.playing) {
            this.listKeyManager.onKeydown(event);
        }
    }
    /**
     * @return {?}
     */
    onMouseEnter() {
        if (this.pauseOnHover) {
            this.stopTimer();
        }
    }
    /**
     * @return {?}
     */
    onMouseLeave() {
        if (this.pauseOnHover) {
            this.startTimer(this._autoplay);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMouseWheel(event) {
        if (this.useMouseWheel) {
            event.preventDefault(); // prevent window to scroll
            // prevent window to scroll
            /** @type {?} */
            const Δ = Math.sign(event.deltaY);
            if (Δ > 0) {
                this.next();
            }
            else if (Δ < 0) {
                this.previous();
            }
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onResize(event) {
        // Reset carousel when window is resized
        // in order to avoid major glitches.
        this.slideTo(0);
    }
    /**
     * @param {?} event
     * @param {?} slideElem
     * @return {?}
     */
    onPan(event, slideElem) {
        // https://github.com/angular/angular/issues/10541#issuecomment-346539242
        // if y velocity is greater, it's a panup/pandown, so ignore.
        if (Math.abs(event.velocityY) > Math.abs(event.velocityX)) {
            return;
        }
        /** @type {?} */
        let Δx = event.deltaX;
        if (this.isOutOfBounds()) {
            Δx *= 0.2; // decelerate movement;
        }
        this.renderer.setStyle(slideElem, 'cursor', 'grabbing');
        this.renderer.setStyle(this.carouselList.nativeElement, 'transform', this.getTranslation(this.getOffset() + Δx));
    }
    /**
     * @param {?} event
     * @param {?} slideElem
     * @return {?}
     */
    onPanEnd(event, slideElem) {
        this.renderer.removeStyle(slideElem, 'cursor');
        if (!this.isOutOfBounds() &&
            Math.abs(event.deltaX) > this.getWidth() * 0.25) {
            if (event.deltaX <= 0) {
                this.next();
                return;
            }
            this.previous();
            return;
        }
        this.playAnimation(); // slide back, don't change current index
    }
    /**
     * @private
     * @return {?}
     */
    isOutOfBounds() {
        /** @type {?} */
        const sign = this.orientation === 'rtl' ? -1 : 1;
        /** @type {?} */
        const left = sign *
            (this.carouselList.nativeElement.getBoundingClientRect().left -
                this.carouselList.nativeElement.offsetParent.getBoundingClientRect()
                    .left);
        /** @type {?} */
        const lastIndex = this.slidesList.length - 1;
        /** @type {?} */
        const width = -this.getWidth() * lastIndex;
        return ((this.listKeyManager.activeItemIndex === 0 && left >= 0) ||
            (this.listKeyManager.activeItemIndex === lastIndex && left <= width));
    }
    /**
     * @private
     * @return {?}
     */
    isVisible() {
        if (!isPlatformBrowser(this.platformId)) {
            return false;
        }
        /** @type {?} */
        const elem = this.carouselContainer.nativeElement;
        /** @type {?} */
        const docViewTop = window.pageYOffset;
        /** @type {?} */
        const docViewBottom = docViewTop + window.innerHeight;
        /** @type {?} */
        const elemOffset = elem.getBoundingClientRect();
        /** @type {?} */
        const elemTop = docViewTop + elemOffset.top;
        /** @type {?} */
        const elemBottom = elemTop + elemOffset.height;
        return elemBottom <= docViewBottom || elemTop >= docViewTop;
    }
    /**
     * @private
     * @return {?}
     */
    getOffset() {
        /** @type {?} */
        const offset = this.listKeyManager.activeItemIndex * this.getWidth();
        /** @type {?} */
        const sign = this.orientation === 'rtl' ? 1 : -1;
        return sign * offset;
    }
    /**
     * @private
     * @param {?} offset
     * @return {?}
     */
    getTranslation(offset) {
        return `translateX(${offset}px)`;
    }
    /**
     * @private
     * @return {?}
     */
    getWidth() {
        return this.carouselContainer.nativeElement.clientWidth;
    }
    /**
     * @private
     * @param {?} direction
     * @param {?=} index
     * @return {?}
     */
    goto(direction, index) {
        if (!this.playing) {
            /** @type {?} */
            const rtl = this.orientation === 'rtl';
            switch (direction) {
                case Direction.Left:
                    return rtl
                        ? this.listKeyManager.setNextItemActive()
                        : this.listKeyManager.setPreviousItemActive();
                case Direction.Right:
                    return rtl
                        ? this.listKeyManager.setPreviousItemActive()
                        : this.listKeyManager.setNextItemActive();
                case Direction.Index:
                    return this.listKeyManager.setActiveItem(index);
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    playAnimation() {
        /** @type {?} */
        const translation = this.getTranslation(this.getOffset());
        /** @type {?} */
        const factory = this.animationBuilder.build(animate(this.timings, style({ transform: translation })));
        /** @type {?} */
        const animation = factory.create(this.carouselList.nativeElement);
        animation.onStart((/**
         * @return {?}
         */
        () => {
            this.playing = true;
            this.animationStart.emit(this.currentIndex);
        }));
        animation.onDone((/**
         * @return {?}
         */
        () => {
            this.change.emit(this.currentIndex);
            this.playing = false;
            this.renderer.setStyle(this.carouselList.nativeElement, 'transform', translation);
            animation.destroy();
        }));
        animation.play();
    }
    /**
     * @private
     * @param {?} slides
     * @return {?}
     */
    resetSlides(slides) {
        this.slidesList.reset(this.slidesList.toArray().slice(0, slides));
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    resetTimer(value) {
        this.timer$ = interval(value);
    }
    /**
     * @private
     * @param {?} autoplay
     * @return {?}
     */
    startTimer(autoplay) {
        if (!autoplay) {
            return;
        }
        this.timer$
            .pipe(takeUntil(this.timerStop$), takeUntil(this.destroy$), filter((/**
         * @return {?}
         */
        () => this.isVisible())))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.listKeyManager.withWrap(true).setNextItemActive();
            this.listKeyManager.withWrap(this.loop);
        }));
    }
    /**
     * @private
     * @return {?}
     */
    stopTimer() {
        this.timerStop$.next();
    }
}
MatCarouselComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-carousel',
                template: "<div\r\n  #carouselContainer\r\n  class=\"carousel\"\r\n  tabindex=\"0\"\r\n  [style.max-width]=\"maxWidth\"\r\n  [style.height]=\"!maintainAspectRatio ? '100%' : 'auto'\"\r\n>\r\n  <ul\r\n    #carouselList\r\n    class=\"carousel-list\"\r\n    role=\"listbox\"\r\n    [style.flex-direction]=\"orientation === 'rtl' ? 'row-reverse' : 'row'\"\r\n    [style.height]=\"!maintainAspectRatio ? '100%' : 'auto'\"\r\n  >\r\n    <li\r\n      #carouselSlide\r\n      *ngFor=\"let slide of slidesList\"\r\n      class=\"carousel-slide\"\r\n      role=\"option\"\r\n      [style.padding-bottom]=\"maintainAspectRatio && proportion ? proportion + '%': '0px'\"\r\n      [style.height]=\"!maintainAspectRatio && slideHeight ? slideHeight : '0px'\"\r\n      (panleft)=\"onPan($event, carouselSlide)\"\r\n      (panright)=\"onPan($event, carouselSlide)\"\r\n      (panend)=\"onPanEnd($event, carouselSlide)\"\r\n      (pancancel)=\"onPanEnd($event, carouselSlide)\"\r\n    >\r\n      <ng-container [ngTemplateOutlet]=\"slide.templateRef\"></ng-container>\r\n    </li>\r\n  </ul>\r\n\r\n  <button\r\n    *ngIf=\"!hideArrows\"\r\n    mat-icon-button\r\n    type=\"button\"\r\n    tabindex=\"-1\"\r\n    [color]=\"color\"\r\n    [disabled]=\"!loop && currentIndex == 0\"\r\n    (click)=\"previous()\"\r\n  >\r\n    <mat-icon\r\n      *ngIf=\"svgIconOverrides?.arrowBack; else: defaultArrowBack\"\r\n      [svgIcon]=\"svgIconOverrides.arrowBack\"\r\n    ></mat-icon>\r\n    <ng-template #defaultArrowBack>\r\n      <mat-icon>arrow_back</mat-icon>\r\n    </ng-template>\r\n  </button>\r\n  <button\r\n    *ngIf=\"!hideArrows\"\r\n    mat-icon-button\r\n    type=\"button\"\r\n    tabindex=\"-1\"\r\n    [color]=\"color\"\r\n    [disabled]=\"!loop && currentIndex == slidesList.length - 1\"\r\n    (click)=\"next()\"\r\n  >\r\n    <mat-icon\r\n      *ngIf=\"svgIconOverrides?.arrowForward; else: defaultArrowForward\"\r\n      [svgIcon]=\"svgIconOverrides.arrowForward\"\r\n    ></mat-icon>\r\n    <ng-template #defaultArrowForward>\r\n      <mat-icon>arrow_forward</mat-icon>\r\n    </ng-template>\r\n  </button>\r\n\r\n  <div\r\n    *ngIf=\"!hideIndicators\"\r\n    class=\"carousel-indicators\"\r\n    tabindex=\"-1\"\r\n    [style.flex-direction]=\"orientation === 'rtl' ? 'row-reverse' : 'row'\"\r\n  >\r\n    <button\r\n      *ngFor=\"let slide of slidesList; let i = index\"\r\n      type=\"button\"\r\n      tabindex=\"-1\"\r\n      mat-mini-fab\r\n      [color]=\"color\"\r\n      [disabled]=\"i == currentIndex\"\r\n      (click)=\"slideTo(i)\"\r\n      (focus)=\"carouselContainer.focus()\"\r\n    ></button>\r\n  </div>\r\n</div>\r\n",
                styles: [".carousel{outline:none;overflow:hidden;position:relative;width:100%}.carousel>button{position:absolute;top:50%;transform:translateY(-50%);z-index:1}.carousel>button:first-of-type{left:30px}.carousel>button:last-of-type{right:30px}.carousel-list{list-style:none;margin:0;padding:0}.carousel-list,.carousel-slide{display:flex;position:relative;width:100%}.carousel-slide{flex-shrink:0;height:0}.carousel-slide:hover{cursor:-webkit-grab;cursor:grab}.carousel-indicators{bottom:15px;display:flex;left:50%;outline:none;position:absolute;transform:translateX(-50%);z-index:1}.carousel-indicators>button{height:10px;margin:7.5px;width:10px}"]
            }] }
];
/** @nocollapse */
MatCarouselComponent.ctorParameters = () => [
    { type: AnimationBuilder },
    { type: Renderer2 },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
MatCarouselComponent.propDecorators = {
    timings: [{ type: Input }],
    svgIconOverrides: [{ type: Input }],
    autoplay: [{ type: Input }],
    interval: [{ type: Input }],
    loop: [{ type: Input }],
    hideArrows: [{ type: Input }],
    hideIndicators: [{ type: Input }],
    pauseOnHover: [{ type: Input }],
    color: [{ type: Input }],
    maxWidth: [{ type: Input }],
    maintainAspectRatio: [{ type: Input }],
    proportion: [{ type: Input }],
    slideHeight: [{ type: Input }],
    slides: [{ type: Input }],
    useKeyboard: [{ type: Input }],
    useMouseWheel: [{ type: Input }],
    orientation: [{ type: Input }],
    animationStart: [{ type: Output }],
    change: [{ type: Output }],
    slidesList: [{ type: ContentChildren, args: [MatCarouselSlideComponent,] }],
    carouselContainer: [{ type: ViewChild, args: ['carouselContainer',] }],
    carouselList: [{ type: ViewChild, args: ['carouselList',] }],
    onKeyUp: [{ type: HostListener, args: ['keyup', ['$event'],] }],
    onMouseEnter: [{ type: HostListener, args: ['mouseenter',] }],
    onMouseLeave: [{ type: HostListener, args: ['mouseleave',] }],
    onMouseWheel: [{ type: HostListener, args: ['mousewheel', ['$event'],] }],
    onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    MatCarouselComponent.prototype.timings;
    /** @type {?} */
    MatCarouselComponent.prototype.svgIconOverrides;
    /** @type {?} */
    MatCarouselComponent.prototype.hideArrows;
    /** @type {?} */
    MatCarouselComponent.prototype.hideIndicators;
    /** @type {?} */
    MatCarouselComponent.prototype.pauseOnHover;
    /** @type {?} */
    MatCarouselComponent.prototype.color;
    /** @type {?} */
    MatCarouselComponent.prototype.maintainAspectRatio;
    /** @type {?} */
    MatCarouselComponent.prototype.proportion;
    /** @type {?} */
    MatCarouselComponent.prototype.slideHeight;
    /** @type {?} */
    MatCarouselComponent.prototype.useKeyboard;
    /** @type {?} */
    MatCarouselComponent.prototype.useMouseWheel;
    /** @type {?} */
    MatCarouselComponent.prototype.animationStart;
    /** @type {?} */
    MatCarouselComponent.prototype.change;
    /** @type {?} */
    MatCarouselComponent.prototype.slidesList;
    /**
     * @type {?}
     * @private
     */
    MatCarouselComponent.prototype.carouselContainer;
    /**
     * @type {?}
     * @private
     */
    MatCarouselComponent.prototype.carouselList;
    /** @type {?} */
    MatCarouselComponent.prototype.listKeyManager;
    /**
     * @type {?}
     * @private
     */
    MatCarouselComponent.prototype._autoplay;
    /**
     * @type {?}
     * @private
     */
    MatCarouselComponent.prototype.autoplay$;
    /**
     * @type {?}
     * @private
     */
    MatCarouselComponent.prototype.interval$;
    /**
     * @type {?}
     * @private
     */
    MatCarouselComponent.prototype.slides$;
    /**
     * @type {?}
     * @private
     */
    MatCarouselComponent.prototype._maxWidth;
    /**
     * @type {?}
     * @private
     */
    MatCarouselComponent.prototype.maxWidth$;
    /**
     * @type {?}
     * @private
     */
    MatCarouselComponent.prototype._loop;
    /**
     * @type {?}
     * @private
     */
    MatCarouselComponent.prototype.loop$;
    /**
     * @type {?}
     * @private
     */
    MatCarouselComponent.prototype._orientation;
    /**
     * @type {?}
     * @private
     */
    MatCarouselComponent.prototype.orientation$;
    /**
     * @type {?}
     * @private
     */
    MatCarouselComponent.prototype.timer$;
    /**
     * @type {?}
     * @private
     */
    MatCarouselComponent.prototype.timerStop$;
    /**
     * @type {?}
     * @private
     */
    MatCarouselComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    MatCarouselComponent.prototype.playing;
    /**
     * @type {?}
     * @private
     */
    MatCarouselComponent.prototype.animationBuilder;
    /**
     * @type {?}
     * @private
     */
    MatCarouselComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    MatCarouselComponent.prototype.platformId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvY2Fyb3VzZWwvc3JjL2xpYi9jYXJvdXNlbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBR0wsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsWUFBWSxFQUNaLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUVMLE1BQU0sRUFDTixXQUFXLEVBQ1gsU0FBUyxFQUNULFNBQVMsRUFDVCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHbkQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7O0FBRXRGLE1BQUssU0FBUztJQUNaLElBQUksR0FBQTtJQUNKLEtBQUssR0FBQTtJQUNMLEtBQUssR0FBQTtFQUNOOzs7O0FBT0QsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7O0lBK0cvQixZQUNVLGdCQUFrQyxFQUNsQyxRQUFtQixFQUNFLFVBQVU7UUFGL0IscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ0UsZUFBVSxHQUFWLFVBQVUsQ0FBQTtRQWhIekIsWUFBTyxHQUFHLGVBQWUsQ0FBQztRQXVCMUIsZUFBVSxHQUFHLElBQUksQ0FBQztR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SzswQkFLTCxLQUFLOzRCQUNMLEtBQUs7MEJBS0wsS0FBSzs2QkFNTCxNQUFNO3FCQUdOLE1BQU07eUJBa0JOLGVBQWUsU0FBQyx5QkFBeUI7Z0NBR3pDLFNBQVMsU0FBQyxtQkFBbUI7MkJBRzdCLFNBQVMsU0FBQyxjQUFjO3NCQTJGeEIsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzsyQkFPaEMsWUFBWSxTQUFDLFlBQVk7MkJBT3pCLFlBQVksU0FBQyxZQUFZOzJCQU96QixZQUFZLFNBQUMsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDO3VCQWNyQyxZQUFZLFNBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDOzs7O0lBbk56Qyx1Q0FBMEM7O0lBQzFDLGdEQUFtRDs7SUFzQm5ELDBDQUFrQzs7SUFDbEMsOENBQXNDOztJQUN0Qyw0Q0FBb0M7O0lBQ3BDLHFDQUErQzs7SUFXL0MsbURBQTJDOztJQUMzQywwQ0FBZ0M7O0lBQ2hDLDJDQUFxQzs7SUFPckMsMkNBQW9DOztJQUNwQyw2Q0FBc0M7O0lBV3RDLDhDQUN5RTs7SUFFekUsc0NBQ2lFOztJQWlCakUsMENBRUU7Ozs7O0lBQ0YsaURBRUU7Ozs7O0lBQ0YsNENBQXlFOztJQUN6RSw4Q0FBaUU7Ozs7O0lBRWpFLHlDQUF5Qjs7Ozs7SUFDekIseUNBQTJDOzs7OztJQUUzQyx5Q0FBc0Q7Ozs7O0lBQ3RELHVDQUFvRDs7Ozs7SUFFcEQseUNBQTJCOzs7OztJQUMzQix5Q0FBeUM7Ozs7O0lBRXpDLHFDQUFxQjs7Ozs7SUFDckIscUNBQXVDOzs7OztJQUV2Qyw0Q0FBMEM7Ozs7O0lBQzFDLDRDQUFrRDs7Ozs7SUFFbEQsc0NBQW1DOzs7OztJQUNuQywwQ0FBMEM7Ozs7O0lBRTFDLHdDQUF3Qzs7Ozs7SUFDeEMsdUNBQXdCOzs7OztJQUd0QixnREFBMEM7Ozs7O0lBQzFDLHdDQUEyQjs7Ozs7SUFDM0IsMENBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYW5pbWF0ZSwgc3R5bGUsIEFuaW1hdGlvbkJ1aWxkZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgTGlzdEtleU1hbmFnZXIgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XHJcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgSW5qZWN0LFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPdXRwdXQsXHJcbiAgUExBVEZPUk1fSUQsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3Q2hpbGRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGhlbWVQYWxldHRlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XHJcbmltcG9ydCB7IGludGVydmFsLCBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmlsdGVyLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBNYXRDYXJvdXNlbCwgT3JpZW50YXRpb24sIFN2Z0ljb25PdmVycmlkZXMgfSBmcm9tICcuL2Nhcm91c2VsJztcclxuaW1wb3J0IHsgTWF0Q2Fyb3VzZWxTbGlkZUNvbXBvbmVudCB9IGZyb20gJy4vY2Fyb3VzZWwtc2xpZGUvY2Fyb3VzZWwtc2xpZGUuY29tcG9uZW50JztcclxuXHJcbmVudW0gRGlyZWN0aW9uIHtcclxuICBMZWZ0LFxyXG4gIFJpZ2h0LFxyXG4gIEluZGV4XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbWF0LWNhcm91c2VsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY2Fyb3VzZWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2Nhcm91c2VsLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdENhcm91c2VsQ29tcG9uZW50XHJcbiAgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBBZnRlclZpZXdJbml0LCBNYXRDYXJvdXNlbCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBwdWJsaWMgdGltaW5ncyA9ICcyNTBtcyBlYXNlLWluJztcclxuICBASW5wdXQoKSBwdWJsaWMgc3ZnSWNvbk92ZXJyaWRlczogU3ZnSWNvbk92ZXJyaWRlcztcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2V0IGF1dG9wbGF5KHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmF1dG9wbGF5JC5uZXh0KHZhbHVlKTtcclxuICAgIHRoaXMuX2F1dG9wbGF5ID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzZXQgaW50ZXJ2YWwodmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5pbnRlcnZhbCQubmV4dCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGxvb3AoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbG9vcDtcclxuICB9XHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2V0IGxvb3AodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMubG9vcCQubmV4dCh2YWx1ZSk7XHJcbiAgICB0aGlzLl9sb29wID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgaGlkZUFycm93cyA9IHRydWU7XHJcbiAgQElucHV0KCkgcHVibGljIGhpZGVJbmRpY2F0b3JzID0gdHJ1ZTtcclxuICBASW5wdXQoKSBwdWJsaWMgcGF1c2VPbkhvdmVyID0gdHJ1ZTtcclxuICBASW5wdXQoKSBwdWJsaWMgY29sb3I6IFRoZW1lUGFsZXR0ZSA9ICdhY2NlbnQnO1xyXG5cclxuICBwdWJsaWMgZ2V0IG1heFdpZHRoKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fbWF4V2lkdGg7XHJcbiAgfVxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNldCBtYXhXaWR0aCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9tYXhXaWR0aCA9IHZhbHVlO1xyXG4gICAgdGhpcy5tYXhXaWR0aCQubmV4dCgpO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgcHVibGljIG1haW50YWluQXNwZWN0UmF0aW8gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBwcm9wb3J0aW9uID0gMjU7XHJcbiAgQElucHV0KCkgcHVibGljIHNsaWRlSGVpZ2h0ID0gJzEwMCUnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzZXQgc2xpZGVzKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuc2xpZGVzJC5uZXh0KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIHB1YmxpYyB1c2VLZXlib2FyZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyB1c2VNb3VzZVdoZWVsID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyBnZXQgb3JpZW50YXRpb24oKTogT3JpZW50YXRpb24ge1xyXG4gICAgcmV0dXJuIHRoaXMuX29yaWVudGF0aW9uO1xyXG4gIH1cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzZXQgb3JpZW50YXRpb24odmFsdWU6IE9yaWVudGF0aW9uKSB7XHJcbiAgICB0aGlzLm9yaWVudGF0aW9uJC5uZXh0KHZhbHVlKTtcclxuICAgIHRoaXMuX29yaWVudGF0aW9uID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgYW5pbWF0aW9uU3RhcnQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcblxyXG4gIHB1YmxpYyBnZXQgY3VycmVudEluZGV4KCk6IG51bWJlciB7XHJcbiAgICBpZiAodGhpcy5saXN0S2V5TWFuYWdlcikge1xyXG4gICAgICByZXR1cm4gdGhpcy5saXN0S2V5TWFuYWdlci5hY3RpdmVJdGVtSW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDA7XHJcbiAgfVxyXG4gIHB1YmxpYyBnZXQgY3VycmVudFNsaWRlKCk6IE1hdENhcm91c2VsU2xpZGVDb21wb25lbnQge1xyXG4gICAgaWYgKHRoaXMubGlzdEtleU1hbmFnZXIpIHtcclxuICAgICAgcmV0dXJuIHRoaXMubGlzdEtleU1hbmFnZXIuYWN0aXZlSXRlbTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIEBDb250ZW50Q2hpbGRyZW4oTWF0Q2Fyb3VzZWxTbGlkZUNvbXBvbmVudCkgcHVibGljIHNsaWRlc0xpc3Q6IFF1ZXJ5TGlzdDxcclxuICAgIE1hdENhcm91c2VsU2xpZGVDb21wb25lbnRcclxuICA+O1xyXG4gIEBWaWV3Q2hpbGQoJ2Nhcm91c2VsQ29udGFpbmVyJykgcHJpdmF0ZSBjYXJvdXNlbENvbnRhaW5lcjogRWxlbWVudFJlZjxcclxuICAgIEhUTUxEaXZFbGVtZW50XHJcbiAgPjtcclxuICBAVmlld0NoaWxkKCdjYXJvdXNlbExpc3QnKSBwcml2YXRlIGNhcm91c2VsTGlzdDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XHJcbiAgcHVibGljIGxpc3RLZXlNYW5hZ2VyOiBMaXN0S2V5TWFuYWdlcjxNYXRDYXJvdXNlbFNsaWRlQ29tcG9uZW50PjtcclxuXHJcbiAgcHJpdmF0ZSBfYXV0b3BsYXkgPSB0cnVlO1xyXG4gIHByaXZhdGUgYXV0b3BsYXkkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcclxuXHJcbiAgcHJpdmF0ZSBpbnRlcnZhbCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PG51bWJlcj4oNTAwMCk7XHJcbiAgcHJpdmF0ZSBzbGlkZXMkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxudW1iZXI+KG51bGwpO1xyXG5cclxuICBwcml2YXRlIF9tYXhXaWR0aCA9ICdhdXRvJztcclxuICBwcml2YXRlIG1heFdpZHRoJCA9IG5ldyBTdWJqZWN0PG5ldmVyPigpO1xyXG5cclxuICBwcml2YXRlIF9sb29wID0gdHJ1ZTtcclxuICBwcml2YXRlIGxvb3AkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcclxuXHJcbiAgcHJpdmF0ZSBfb3JpZW50YXRpb246IE9yaWVudGF0aW9uID0gJ2x0cic7XHJcbiAgcHJpdmF0ZSBvcmllbnRhdGlvbiQgPSBuZXcgU3ViamVjdDxPcmllbnRhdGlvbj4oKTtcclxuXHJcbiAgcHJpdmF0ZSB0aW1lciQ6IE9ic2VydmFibGU8bnVtYmVyPjtcclxuICBwcml2YXRlIHRpbWVyU3RvcCQgPSBuZXcgU3ViamVjdDxuZXZlcj4oKTtcclxuXHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PG5ldmVyPigpO1xyXG4gIHByaXZhdGUgcGxheWluZyA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgYW5pbWF0aW9uQnVpbGRlcjogQW5pbWF0aW9uQnVpbGRlcixcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZFxyXG4gICkge31cclxuXHJcbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMubGlzdEtleU1hbmFnZXIgPSBuZXcgTGlzdEtleU1hbmFnZXIodGhpcy5zbGlkZXNMaXN0KVxyXG4gICAgICAud2l0aFZlcnRpY2FsT3JpZW50YXRpb24oZmFsc2UpXHJcbiAgICAgIC53aXRoSG9yaXpvbnRhbE9yaWVudGF0aW9uKHRoaXMuX29yaWVudGF0aW9uKVxyXG4gICAgICAud2l0aFdyYXAodGhpcy5fbG9vcCk7XHJcblxyXG4gICAgdGhpcy5saXN0S2V5TWFuYWdlci51cGRhdGVBY3RpdmVJdGVtKDApO1xyXG4gICAgdGhpcy5saXN0S2V5TWFuYWdlci5jaGFuZ2VcclxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMucGxheUFuaW1hdGlvbigpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmF1dG9wbGF5JC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKHZhbHVlID0+IHtcclxuICAgICAgdGhpcy5zdG9wVGltZXIoKTtcclxuICAgICAgdGhpcy5zdGFydFRpbWVyKHZhbHVlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuaW50ZXJ2YWwkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUodmFsdWUgPT4ge1xyXG4gICAgICB0aGlzLnN0b3BUaW1lcigpO1xyXG4gICAgICB0aGlzLnJlc2V0VGltZXIodmFsdWUpO1xyXG4gICAgICB0aGlzLnN0YXJ0VGltZXIodGhpcy5fYXV0b3BsYXkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5tYXhXaWR0aCRcclxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2xpZGVUbygwKSk7XHJcblxyXG4gICAgdGhpcy5sb29wJFxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgIC5zdWJzY3JpYmUodmFsdWUgPT4gdGhpcy5saXN0S2V5TWFuYWdlci53aXRoV3JhcCh2YWx1ZSkpO1xyXG5cclxuICAgIHRoaXMub3JpZW50YXRpb24kXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgLnN1YnNjcmliZSh2YWx1ZSA9PiB0aGlzLmxpc3RLZXlNYW5hZ2VyLndpdGhIb3Jpem9udGFsT3JpZW50YXRpb24odmFsdWUpKTtcclxuXHJcbiAgICB0aGlzLnNsaWRlcyRcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxyXG4gICAgICAgIGZpbHRlcih2YWx1ZSA9PiB2YWx1ZSAmJiB2YWx1ZSA8IHRoaXMuc2xpZGVzTGlzdC5sZW5ndGgpXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZSh2YWx1ZSA9PiB0aGlzLnJlc2V0U2xpZGVzKHZhbHVlKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZXh0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5nb3RvKERpcmVjdGlvbi5SaWdodCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcHJldmlvdXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLmdvdG8oRGlyZWN0aW9uLkxlZnQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNsaWRlVG8oaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5nb3RvKERpcmVjdGlvbi5JbmRleCwgaW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcigna2V5dXAnLCBbJyRldmVudCddKVxyXG4gIHB1YmxpYyBvbktleVVwKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy51c2VLZXlib2FyZCAmJiAhdGhpcy5wbGF5aW5nKSB7XHJcbiAgICAgIHRoaXMubGlzdEtleU1hbmFnZXIub25LZXlkb3duKGV2ZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInKVxyXG4gIHB1YmxpYyBvbk1vdXNlRW50ZXIoKTogdm9pZCB7XHJcbiAgICBpZih0aGlzLnBhdXNlT25Ib3Zlcil7XHJcbiAgICAgIHRoaXMuc3RvcFRpbWVyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJylcclxuICBwdWJsaWMgb25Nb3VzZUxlYXZlKCk6IHZvaWQge1xyXG4gICAgaWYodGhpcy5wYXVzZU9uSG92ZXIpe1xyXG4gICAgICB0aGlzLnN0YXJ0VGltZXIodGhpcy5fYXV0b3BsYXkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignbW91c2V3aGVlbCcsIFsnJGV2ZW50J10pXHJcbiAgcHVibGljIG9uTW91c2VXaGVlbChldmVudDogV2hlZWxFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudXNlTW91c2VXaGVlbCkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBwcmV2ZW50IHdpbmRvdyB0byBzY3JvbGxcclxuICAgICAgY29uc3QgzpQgPSBNYXRoLnNpZ24oZXZlbnQuZGVsdGFZKTtcclxuXHJcbiAgICAgIGlmICjOlCA+IDApIHtcclxuICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgfSBlbHNlIGlmICjOlCA8IDApIHtcclxuICAgICAgICB0aGlzLnByZXZpb3VzKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnLCBbJyRldmVudCddKVxyXG4gIHB1YmxpYyBvblJlc2l6ZShldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgIC8vIFJlc2V0IGNhcm91c2VsIHdoZW4gd2luZG93IGlzIHJlc2l6ZWRcclxuICAgIC8vIGluIG9yZGVyIHRvIGF2b2lkIG1ham9yIGdsaXRjaGVzLlxyXG4gICAgdGhpcy5zbGlkZVRvKDApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uUGFuKGV2ZW50OiBhbnksIHNsaWRlRWxlbTogSFRNTEVsZW1lbnQpOiB2b2lkIHtcclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzEwNTQxI2lzc3VlY29tbWVudC0zNDY1MzkyNDJcclxuICAgIC8vIGlmIHkgdmVsb2NpdHkgaXMgZ3JlYXRlciwgaXQncyBhIHBhbnVwL3BhbmRvd24sIHNvIGlnbm9yZS5cclxuICAgIGlmIChNYXRoLmFicyhldmVudC52ZWxvY2l0eVkpID4gTWF0aC5hYnMoZXZlbnQudmVsb2NpdHlYKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgzpR4ID0gZXZlbnQuZGVsdGFYO1xyXG4gICAgaWYgKHRoaXMuaXNPdXRPZkJvdW5kcygpKSB7XHJcbiAgICAgIM6UeCAqPSAwLjI7IC8vIGRlY2VsZXJhdGUgbW92ZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShzbGlkZUVsZW0sICdjdXJzb3InLCAnZ3JhYmJpbmcnKTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXHJcbiAgICAgIHRoaXMuY2Fyb3VzZWxMaXN0Lm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICd0cmFuc2Zvcm0nLFxyXG4gICAgICB0aGlzLmdldFRyYW5zbGF0aW9uKHRoaXMuZ2V0T2Zmc2V0KCkgKyDOlHgpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uUGFuRW5kKGV2ZW50OiBhbnksIHNsaWRlRWxlbTogSFRNTEVsZW1lbnQpOiB2b2lkIHtcclxuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUoc2xpZGVFbGVtLCAnY3Vyc29yJyk7XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICAhdGhpcy5pc091dE9mQm91bmRzKCkgJiZcclxuICAgICAgTWF0aC5hYnMoZXZlbnQuZGVsdGFYKSA+IHRoaXMuZ2V0V2lkdGgoKSAqIDAuMjVcclxuICAgICkge1xyXG4gICAgICBpZiAoZXZlbnQuZGVsdGFYIDw9IDApIHtcclxuICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5wcmV2aW91cygpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnBsYXlBbmltYXRpb24oKTsgLy8gc2xpZGUgYmFjaywgZG9uJ3QgY2hhbmdlIGN1cnJlbnQgaW5kZXhcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNPdXRPZkJvdW5kcygpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IHNpZ24gPSB0aGlzLm9yaWVudGF0aW9uID09PSAncnRsJyA/IC0xIDogMTtcclxuICAgIGNvbnN0IGxlZnQgPVxyXG4gICAgICBzaWduICpcclxuICAgICAgKHRoaXMuY2Fyb3VzZWxMaXN0Lm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCAtXHJcbiAgICAgICAgdGhpcy5jYXJvdXNlbExpc3QubmF0aXZlRWxlbWVudC5vZmZzZXRQYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuICAgICAgICAgIC5sZWZ0KTtcclxuICAgIGNvbnN0IGxhc3RJbmRleCA9IHRoaXMuc2xpZGVzTGlzdC5sZW5ndGggLSAxO1xyXG4gICAgY29uc3Qgd2lkdGggPSAtdGhpcy5nZXRXaWR0aCgpICogbGFzdEluZGV4O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICh0aGlzLmxpc3RLZXlNYW5hZ2VyLmFjdGl2ZUl0ZW1JbmRleCA9PT0gMCAmJiBsZWZ0ID49IDApIHx8XHJcbiAgICAgICh0aGlzLmxpc3RLZXlNYW5hZ2VyLmFjdGl2ZUl0ZW1JbmRleCA9PT0gbGFzdEluZGV4ICYmIGxlZnQgPD0gd2lkdGgpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc1Zpc2libGUoKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIWlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGVsZW0gPSB0aGlzLmNhcm91c2VsQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBjb25zdCBkb2NWaWV3VG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gICAgY29uc3QgZG9jVmlld0JvdHRvbSA9IGRvY1ZpZXdUb3AgKyB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICBjb25zdCBlbGVtT2Zmc2V0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IGVsZW1Ub3AgPSBkb2NWaWV3VG9wICsgZWxlbU9mZnNldC50b3A7XHJcbiAgICBjb25zdCBlbGVtQm90dG9tID0gZWxlbVRvcCArIGVsZW1PZmZzZXQuaGVpZ2h0O1xyXG5cclxuICAgIHJldHVybiBlbGVtQm90dG9tIDw9IGRvY1ZpZXdCb3R0b20gfHwgZWxlbVRvcCA+PSBkb2NWaWV3VG9wO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRPZmZzZXQoKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IG9mZnNldCA9IHRoaXMubGlzdEtleU1hbmFnZXIuYWN0aXZlSXRlbUluZGV4ICogdGhpcy5nZXRXaWR0aCgpO1xyXG4gICAgY29uc3Qgc2lnbiA9IHRoaXMub3JpZW50YXRpb24gPT09ICdydGwnID8gMSA6IC0xO1xyXG4gICAgcmV0dXJuIHNpZ24gKiBvZmZzZXQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFRyYW5zbGF0aW9uKG9mZnNldDogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgdHJhbnNsYXRlWCgke29mZnNldH1weClgO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRXaWR0aCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuY2Fyb3VzZWxDb250YWluZXIubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ290byhkaXJlY3Rpb246IERpcmVjdGlvbiwgaW5kZXg/OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5wbGF5aW5nKSB7XHJcbiAgICAgIGNvbnN0IHJ0bCA9IHRoaXMub3JpZW50YXRpb24gPT09ICdydGwnO1xyXG5cclxuICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcclxuICAgICAgICBjYXNlIERpcmVjdGlvbi5MZWZ0OlxyXG4gICAgICAgICAgcmV0dXJuIHJ0bFxyXG4gICAgICAgICAgICA/IHRoaXMubGlzdEtleU1hbmFnZXIuc2V0TmV4dEl0ZW1BY3RpdmUoKVxyXG4gICAgICAgICAgICA6IHRoaXMubGlzdEtleU1hbmFnZXIuc2V0UHJldmlvdXNJdGVtQWN0aXZlKCk7XHJcbiAgICAgICAgY2FzZSBEaXJlY3Rpb24uUmlnaHQ6XHJcbiAgICAgICAgICByZXR1cm4gcnRsXHJcbiAgICAgICAgICAgID8gdGhpcy5saXN0S2V5TWFuYWdlci5zZXRQcmV2aW91c0l0ZW1BY3RpdmUoKVxyXG4gICAgICAgICAgICA6IHRoaXMubGlzdEtleU1hbmFnZXIuc2V0TmV4dEl0ZW1BY3RpdmUoKTtcclxuICAgICAgICBjYXNlIERpcmVjdGlvbi5JbmRleDpcclxuICAgICAgICAgIHJldHVybiB0aGlzLmxpc3RLZXlNYW5hZ2VyLnNldEFjdGl2ZUl0ZW0oaW5kZXgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHBsYXlBbmltYXRpb24oKTogdm9pZCB7XHJcbiAgICBjb25zdCB0cmFuc2xhdGlvbiA9IHRoaXMuZ2V0VHJhbnNsYXRpb24odGhpcy5nZXRPZmZzZXQoKSk7XHJcbiAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5hbmltYXRpb25CdWlsZGVyLmJ1aWxkKFxyXG4gICAgICBhbmltYXRlKHRoaXMudGltaW5ncywgc3R5bGUoeyB0cmFuc2Zvcm06IHRyYW5zbGF0aW9uIH0pKVxyXG4gICAgKTtcclxuICAgIGNvbnN0IGFuaW1hdGlvbiA9IGZhY3RvcnkuY3JlYXRlKHRoaXMuY2Fyb3VzZWxMaXN0Lm5hdGl2ZUVsZW1lbnQpO1xyXG5cclxuICAgIGFuaW1hdGlvbi5vblN0YXJ0KCgpID0+IHtcclxuICAgICAgdGhpcy5wbGF5aW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5hbmltYXRpb25TdGFydC5lbWl0KHRoaXMuY3VycmVudEluZGV4KTtcclxuICB9KTtcclxuICAgIGFuaW1hdGlvbi5vbkRvbmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNoYW5nZS5lbWl0KHRoaXMuY3VycmVudEluZGV4KTtcclxuICAgICAgdGhpcy5wbGF5aW5nID0gZmFsc2U7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXHJcbiAgICAgICAgdGhpcy5jYXJvdXNlbExpc3QubmF0aXZlRWxlbWVudCxcclxuICAgICAgICAndHJhbnNmb3JtJyxcclxuICAgICAgICB0cmFuc2xhdGlvblxyXG4gICAgICApO1xyXG4gICAgICBhbmltYXRpb24uZGVzdHJveSgpO1xyXG4gICAgfSk7XHJcbiAgICBhbmltYXRpb24ucGxheSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZXNldFNsaWRlcyhzbGlkZXM6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5zbGlkZXNMaXN0LnJlc2V0KHRoaXMuc2xpZGVzTGlzdC50b0FycmF5KCkuc2xpY2UoMCwgc2xpZGVzKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlc2V0VGltZXIodmFsdWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy50aW1lciQgPSBpbnRlcnZhbCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXJ0VGltZXIoYXV0b3BsYXk6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmICghYXV0b3BsYXkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudGltZXIkXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLnRpbWVyU3RvcCQpLFxyXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcclxuICAgICAgICBmaWx0ZXIoKCkgPT4gdGhpcy5pc1Zpc2libGUoKSlcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLmxpc3RLZXlNYW5hZ2VyLndpdGhXcmFwKHRydWUpLnNldE5leHRJdGVtQWN0aXZlKCk7XHJcbiAgICAgICAgdGhpcy5saXN0S2V5TWFuYWdlci53aXRoV3JhcCh0aGlzLmxvb3ApO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RvcFRpbWVyKCk6IHZvaWQge1xyXG4gICAgdGhpcy50aW1lclN0b3AkLm5leHQoKTtcclxuICB9XHJcbn1cclxuIl19