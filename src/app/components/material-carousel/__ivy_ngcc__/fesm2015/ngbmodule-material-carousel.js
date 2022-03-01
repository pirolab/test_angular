import { animate, style, AnimationBuilder } from '@angular/animations';
import { ListKeyManager } from '@angular/cdk/a11y';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { Component, Input, ViewChild, TemplateRef, EventEmitter, Renderer2, Inject, PLATFORM_ID, Output, ContentChildren, HostListener, Injectable, NgModule } from '@angular/core';
import { Subject, BehaviorSubject, interval } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';
import { DomSanitizer, HammerGestureConfig, HAMMER_GESTURE_CONFIG, HammerModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/carousel-slide/carousel-slide.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/platform-browser';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from '@angular/animations';
import * as ɵngcc4 from '@angular/material/button';
import * as ɵngcc5 from '@angular/material/icon';

function MatCarouselSlideComponent_ng_template_0_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 3);
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵstyleProp("background-color", ctx_r1.overlayColor);
} }
function MatCarouselSlideComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
    ɵngcc0.ɵɵprojection(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(3, MatCarouselSlideComponent_ng_template_0_div_3_Template, 1, 2, "div", 2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("background-image", ctx_r0.image);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r0.hideOverlay);
} }
const _c0 = ["*"];
const _c1 = ["carouselContainer"];
const _c2 = ["carouselList"];
function MatCarouselComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 7, 8);
    ɵngcc0.ɵɵlistener("panleft", function MatCarouselComponent_li_4_Template_li_panleft_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); const _r7 = ɵngcc0.ɵɵreference(1); const ctx_r8 = ɵngcc0.ɵɵnextContext(); return ctx_r8.onPan($event, _r7); })("panright", function MatCarouselComponent_li_4_Template_li_panright_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); const _r7 = ɵngcc0.ɵɵreference(1); const ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.onPan($event, _r7); })("panend", function MatCarouselComponent_li_4_Template_li_panend_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); const _r7 = ɵngcc0.ɵɵreference(1); const ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.onPanEnd($event, _r7); })("pancancel", function MatCarouselComponent_li_4_Template_li_pancancel_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); const _r7 = ɵngcc0.ɵɵreference(1); const ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.onPanEnd($event, _r7); });
    ɵngcc0.ɵɵelementContainer(2, 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const slide_r6 = ctx.$implicit;
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("padding-bottom", ctx_r2.maintainAspectRatio && ctx_r2.proportion ? ctx_r2.proportion + "%" : "0px")("height", !ctx_r2.maintainAspectRatio && ctx_r2.slideHeight ? ctx_r2.slideHeight : "0px");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", slide_r6.templateRef);
} }
function MatCarouselComponent_button_5_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "mat-icon", 13);
} if (rf & 2) {
    const ctx_r13 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("svgIcon", ctx_r13.svgIconOverrides.arrowBack);
} }
function MatCarouselComponent_button_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-icon");
    ɵngcc0.ɵɵtext(1, "arrow_back");
    ɵngcc0.ɵɵelementEnd();
} }
function MatCarouselComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r17 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 10);
    ɵngcc0.ɵɵlistener("click", function MatCarouselComponent_button_5_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r17); const ctx_r16 = ɵngcc0.ɵɵnextContext(); return ctx_r16.previous(); });
    ɵngcc0.ɵɵtemplate(1, MatCarouselComponent_button_5_mat_icon_1_Template, 1, 1, "mat-icon", 11);
    ɵngcc0.ɵɵtemplate(2, MatCarouselComponent_button_5_ng_template_2_Template, 2, 0, "ng-template", null, 12, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const _r14 = ɵngcc0.ɵɵreference(3);
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("color", ctx_r3.color)("disabled", !ctx_r3.loop && ctx_r3.currentIndex == 0);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.svgIconOverrides == null ? null : ctx_r3.svgIconOverrides.arrowBack)("ngIfElse", _r14);
} }
function MatCarouselComponent_button_6_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "mat-icon", 13);
} if (rf & 2) {
    const ctx_r18 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("svgIcon", ctx_r18.svgIconOverrides.arrowForward);
} }
function MatCarouselComponent_button_6_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-icon");
    ɵngcc0.ɵɵtext(1, "arrow_forward");
    ɵngcc0.ɵɵelementEnd();
} }
function MatCarouselComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r22 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 10);
    ɵngcc0.ɵɵlistener("click", function MatCarouselComponent_button_6_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r22); const ctx_r21 = ɵngcc0.ɵɵnextContext(); return ctx_r21.next(); });
    ɵngcc0.ɵɵtemplate(1, MatCarouselComponent_button_6_mat_icon_1_Template, 1, 1, "mat-icon", 11);
    ɵngcc0.ɵɵtemplate(2, MatCarouselComponent_button_6_ng_template_2_Template, 2, 0, "ng-template", null, 14, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const _r19 = ɵngcc0.ɵɵreference(3);
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("color", ctx_r4.color)("disabled", !ctx_r4.loop && ctx_r4.currentIndex == ctx_r4.slidesList.length - 1);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.svgIconOverrides == null ? null : ctx_r4.svgIconOverrides.arrowForward)("ngIfElse", _r19);
} }
function MatCarouselComponent_div_7_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r27 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 17);
    ɵngcc0.ɵɵlistener("click", function MatCarouselComponent_div_7_button_1_Template_button_click_0_listener() { const restoredCtx = ɵngcc0.ɵɵrestoreView(_r27); const i_r25 = restoredCtx.index; const ctx_r26 = ɵngcc0.ɵɵnextContext(2); return ctx_r26.slideTo(i_r25); })("focus", function MatCarouselComponent_div_7_button_1_Template_button_focus_0_listener() { ɵngcc0.ɵɵrestoreView(_r27); ɵngcc0.ɵɵnextContext(2); const _r0 = ɵngcc0.ɵɵreference(1); return _r0.focus(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r25 = ctx.index;
    const ctx_r23 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("color", ctx_r23.color)("disabled", i_r25 == ctx_r23.currentIndex);
} }
function MatCarouselComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 15);
    ɵngcc0.ɵɵtemplate(1, MatCarouselComponent_div_7_button_1_Template, 1, 2, "button", 16);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("flex-direction", ctx_r5.orientation === "rtl" ? "row-reverse" : "row");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r5.slidesList);
} }
class MatCarouselSlideComponent {
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
MatCarouselSlideComponent.ɵfac = function MatCarouselSlideComponent_Factory(t) { return new (t || MatCarouselSlideComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.DomSanitizer)); };
MatCarouselSlideComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: MatCarouselSlideComponent, selectors: [["mat-carousel-slide"]], viewQuery: function MatCarouselSlideComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(TemplateRef, 5);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templateRef = _t.first);
    } }, inputs: { overlayColor: "overlayColor", hideOverlay: "hideOverlay", disabled: "disabled", image: "image" }, ngContentSelectors: _c0, decls: 1, vars: 0, consts: [[1, "carousel-slide"], [1, "carousel-slide-content"], ["class", "carousel-slide-overlay", 3, "background-color", 4, "ngIf"], [1, "carousel-slide-overlay"]], template: function MatCarouselSlideComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, MatCarouselSlideComponent_ng_template_0_Template, 4, 3, "ng-template");
    } }, directives: [ɵngcc2.NgIf], styles: [".carousel-slide[_ngcontent-%COMP%]{background-position:50%;background-repeat:no-repeat;background-size:cover}.carousel-slide[_ngcontent-%COMP%], .carousel-slide-overlay[_ngcontent-%COMP%]{height:100%;position:absolute;width:100%;z-index:auto}.carousel-slide-content[_ngcontent-%COMP%]{height:100%;position:absolute;width:100%;z-index:1}"] });
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(MatCarouselSlideComponent, [{
        type: Component,
        args: [{
                selector: 'mat-carousel-slide',
                template: "<ng-template>\r\n  <div class=\"carousel-slide\" [style.background-image]=\"image\">\r\n    <div class=\"carousel-slide-content\"><ng-content></ng-content></div>\r\n    <div\r\n      *ngIf=\"!hideOverlay\"\r\n      class=\"carousel-slide-overlay\"\r\n      [style.background-color]=\"overlayColor\"\r\n    ></div>\r\n  </div>\r\n</ng-template>\r\n",
                styles: [".carousel-slide{background-position:50%;background-repeat:no-repeat;background-size:cover}.carousel-slide,.carousel-slide-overlay{height:100%;position:absolute;width:100%;z-index:auto}.carousel-slide-content{height:100%;position:absolute;width:100%;z-index:1}"]
            }]
    }], function () { return [{ type: ɵngcc1.DomSanitizer }]; }, { overlayColor: [{
            type: Input
        }], hideOverlay: [{
            type: Input
        }], disabled: [{
            type: Input
        }], image: [{
            type: Input
        }], templateRef: [{
            type: ViewChild,
            args: [TemplateRef]
        }] }); })();
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/carousel.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const Direction = {
    Left: 0,
    Right: 1,
    Index: 2,
};
Direction[Direction.Left] = 'Left';
Direction[Direction.Right] = 'Right';
Direction[Direction.Index] = 'Index';
class MatCarouselComponent {
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
MatCarouselComponent.ɵfac = function MatCarouselComponent_Factory(t) { return new (t || MatCarouselComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc3.AnimationBuilder), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(PLATFORM_ID)); };
MatCarouselComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: MatCarouselComponent, selectors: [["mat-carousel"]], contentQueries: function MatCarouselComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, MatCarouselSlideComponent, 4);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.slidesList = _t);
    } }, viewQuery: function MatCarouselComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c1, 5);
        ɵngcc0.ɵɵviewQuery(_c2, 5);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.carouselContainer = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.carouselList = _t.first);
    } }, hostBindings: function MatCarouselComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("keyup", function MatCarouselComponent_keyup_HostBindingHandler($event) { return ctx.onKeyUp($event); })("mouseenter", function MatCarouselComponent_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function MatCarouselComponent_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); })("mousewheel", function MatCarouselComponent_mousewheel_HostBindingHandler($event) { return ctx.onMouseWheel($event); })("resize", function MatCarouselComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, ɵngcc0.ɵɵresolveWindow);
    } }, inputs: { timings: "timings", hideArrows: "hideArrows", hideIndicators: "hideIndicators", pauseOnHover: "pauseOnHover", color: "color", maintainAspectRatio: "maintainAspectRatio", proportion: "proportion", slideHeight: "slideHeight", useKeyboard: "useKeyboard", useMouseWheel: "useMouseWheel", autoplay: "autoplay", interval: "interval", loop: "loop", maxWidth: "maxWidth", slides: "slides", orientation: "orientation", svgIconOverrides: "svgIconOverrides" }, outputs: { animationStart: "animationStart", change: "change" }, decls: 8, vars: 12, consts: [["tabindex", "0", 1, "carousel"], ["carouselContainer", ""], ["role", "listbox", 1, "carousel-list"], ["carouselList", ""], ["class", "carousel-slide", "role", "option", 3, "padding-bottom", "height", "panleft", "panright", "panend", "pancancel", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", "type", "button", "tabindex", "-1", 3, "color", "disabled", "click", 4, "ngIf"], ["class", "carousel-indicators", "tabindex", "-1", 3, "flex-direction", 4, "ngIf"], ["role", "option", 1, "carousel-slide", 3, "panleft", "panright", "panend", "pancancel"], ["carouselSlide", ""], [3, "ngTemplateOutlet"], ["mat-icon-button", "", "type", "button", "tabindex", "-1", 3, "color", "disabled", "click"], [3, "svgIcon", 4, "ngIf", "ngIfElse"], ["defaultArrowBack", ""], [3, "svgIcon"], ["defaultArrowForward", ""], ["tabindex", "-1", 1, "carousel-indicators"], ["type", "button", "tabindex", "-1", "mat-mini-fab", "", 3, "color", "disabled", "click", "focus", 4, "ngFor", "ngForOf"], ["type", "button", "tabindex", "-1", "mat-mini-fab", "", 3, "color", "disabled", "click", "focus"]], template: function MatCarouselComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0, 1)(2, "ul", 2, 3);
        ɵngcc0.ɵɵtemplate(4, MatCarouselComponent_li_4_Template, 3, 5, "li", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(5, MatCarouselComponent_button_5_Template, 4, 4, "button", 5);
        ɵngcc0.ɵɵtemplate(6, MatCarouselComponent_button_6_Template, 4, 4, "button", 5);
        ɵngcc0.ɵɵtemplate(7, MatCarouselComponent_div_7_Template, 2, 3, "div", 6);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("max-width", ctx.maxWidth)("height", !ctx.maintainAspectRatio ? "100%" : "auto");
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵstyleProp("flex-direction", ctx.orientation === "rtl" ? "row-reverse" : "row")("height", !ctx.maintainAspectRatio ? "100%" : "auto");
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.slidesList);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.hideArrows);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.hideArrows);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.hideIndicators);
    } }, directives: [ɵngcc2.NgForOf, ɵngcc2.NgTemplateOutlet, ɵngcc2.NgIf, ɵngcc4.MatButton, ɵngcc5.MatIcon], styles: [".carousel[_ngcontent-%COMP%]{outline:none;overflow:hidden;position:relative;width:100%}.carousel[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{position:absolute;top:50%;transform:translateY(-50%);z-index:1}.carousel[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:first-of-type{left:30px}.carousel[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:last-of-type{right:30px}.carousel-list[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0}.carousel-list[_ngcontent-%COMP%], .carousel-slide[_ngcontent-%COMP%]{display:flex;position:relative;width:100%}.carousel-slide[_ngcontent-%COMP%]{flex-shrink:0;height:0}.carousel-slide[_ngcontent-%COMP%]:hover{cursor:-webkit-grab;cursor:grab}.carousel-indicators[_ngcontent-%COMP%]{bottom:15px;display:flex;left:50%;outline:none;position:absolute;transform:translateX(-50%);z-index:1}.carousel-indicators[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{height:10px;margin:7.5px;width:10px}"] });
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(MatCarouselComponent, [{
        type: Component,
        args: [{
                selector: 'mat-carousel',
                template: "<div\r\n  #carouselContainer\r\n  class=\"carousel\"\r\n  tabindex=\"0\"\r\n  [style.max-width]=\"maxWidth\"\r\n  [style.height]=\"!maintainAspectRatio ? '100%' : 'auto'\"\r\n>\r\n  <ul\r\n    #carouselList\r\n    class=\"carousel-list\"\r\n    role=\"listbox\"\r\n    [style.flex-direction]=\"orientation === 'rtl' ? 'row-reverse' : 'row'\"\r\n    [style.height]=\"!maintainAspectRatio ? '100%' : 'auto'\"\r\n  >\r\n    <li\r\n      #carouselSlide\r\n      *ngFor=\"let slide of slidesList\"\r\n      class=\"carousel-slide\"\r\n      role=\"option\"\r\n      [style.padding-bottom]=\"maintainAspectRatio && proportion ? proportion + '%': '0px'\"\r\n      [style.height]=\"!maintainAspectRatio && slideHeight ? slideHeight : '0px'\"\r\n      (panleft)=\"onPan($event, carouselSlide)\"\r\n      (panright)=\"onPan($event, carouselSlide)\"\r\n      (panend)=\"onPanEnd($event, carouselSlide)\"\r\n      (pancancel)=\"onPanEnd($event, carouselSlide)\"\r\n    >\r\n      <ng-container [ngTemplateOutlet]=\"slide.templateRef\"></ng-container>\r\n    </li>\r\n  </ul>\r\n\r\n  <button\r\n    *ngIf=\"!hideArrows\"\r\n    mat-icon-button\r\n    type=\"button\"\r\n    tabindex=\"-1\"\r\n    [color]=\"color\"\r\n    [disabled]=\"!loop && currentIndex == 0\"\r\n    (click)=\"previous()\"\r\n  >\r\n    <mat-icon\r\n      *ngIf=\"svgIconOverrides?.arrowBack; else: defaultArrowBack\"\r\n      [svgIcon]=\"svgIconOverrides.arrowBack\"\r\n    ></mat-icon>\r\n    <ng-template #defaultArrowBack>\r\n      <mat-icon>arrow_back</mat-icon>\r\n    </ng-template>\r\n  </button>\r\n  <button\r\n    *ngIf=\"!hideArrows\"\r\n    mat-icon-button\r\n    type=\"button\"\r\n    tabindex=\"-1\"\r\n    [color]=\"color\"\r\n    [disabled]=\"!loop && currentIndex == slidesList.length - 1\"\r\n    (click)=\"next()\"\r\n  >\r\n    <mat-icon\r\n      *ngIf=\"svgIconOverrides?.arrowForward; else: defaultArrowForward\"\r\n      [svgIcon]=\"svgIconOverrides.arrowForward\"\r\n    ></mat-icon>\r\n    <ng-template #defaultArrowForward>\r\n      <mat-icon>arrow_forward</mat-icon>\r\n    </ng-template>\r\n  </button>\r\n\r\n  <div\r\n    *ngIf=\"!hideIndicators\"\r\n    class=\"carousel-indicators\"\r\n    tabindex=\"-1\"\r\n    [style.flex-direction]=\"orientation === 'rtl' ? 'row-reverse' : 'row'\"\r\n  >\r\n    <button\r\n      *ngFor=\"let slide of slidesList; let i = index\"\r\n      type=\"button\"\r\n      tabindex=\"-1\"\r\n      mat-mini-fab\r\n      [color]=\"color\"\r\n      [disabled]=\"i == currentIndex\"\r\n      (click)=\"slideTo(i)\"\r\n      (focus)=\"carouselContainer.focus()\"\r\n    ></button>\r\n  </div>\r\n</div>\r\n",
                styles: [".carousel{outline:none;overflow:hidden;position:relative;width:100%}.carousel>button{position:absolute;top:50%;transform:translateY(-50%);z-index:1}.carousel>button:first-of-type{left:30px}.carousel>button:last-of-type{right:30px}.carousel-list{list-style:none;margin:0;padding:0}.carousel-list,.carousel-slide{display:flex;position:relative;width:100%}.carousel-slide{flex-shrink:0;height:0}.carousel-slide:hover{cursor:-webkit-grab;cursor:grab}.carousel-indicators{bottom:15px;display:flex;left:50%;outline:none;position:absolute;transform:translateX(-50%);z-index:1}.carousel-indicators>button{height:10px;margin:7.5px;width:10px}"]
            }]
    }], function () { return [{ type: ɵngcc3.AnimationBuilder }, { type: ɵngcc0.Renderer2 }, { type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }]; }, { timings: [{
            type: Input
        }], hideArrows: [{
            type: Input
        }], hideIndicators: [{
            type: Input
        }], pauseOnHover: [{
            type: Input
        }], color: [{
            type: Input
        }], maintainAspectRatio: [{
            type: Input
        }], proportion: [{
            type: Input
        }], slideHeight: [{
            type: Input
        }], useKeyboard: [{
            type: Input
        }], useMouseWheel: [{
            type: Input
        }], animationStart: [{
            type: Output
        }], change: [{
            type: Output
        }], autoplay: [{
            type: Input
        }], interval: [{
            type: Input
        }], loop: [{
            type: Input
        }], maxWidth: [{
            type: Input
        }], slides: [{
            type: Input
        }], orientation: [{
            type: Input
        }], 
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyUp: [{
            type: HostListener,
            args: ['keyup', ['$event']]
        }], 
    /**
     * @return {?}
     */
    onMouseEnter: [{
            type: HostListener,
            args: ['mouseenter']
        }], 
    /**
     * @return {?}
     */
    onMouseLeave: [{
            type: HostListener,
            args: ['mouseleave']
        }], 
    /**
     * @param {?} event
     * @return {?}
     */
    onMouseWheel: [{
            type: HostListener,
            args: ['mousewheel', ['$event']]
        }], 
    /**
     * @param {?} event
     * @return {?}
     */
    onResize: [{
            type: HostListener,
            args: ['window:resize', ['$event']]
        }], svgIconOverrides: [{
            type: Input
        }], slidesList: [{
            type: ContentChildren,
            args: [MatCarouselSlideComponent]
        }], carouselContainer: [{
            type: ViewChild,
            args: ['carouselContainer']
        }], carouselList: [{
            type: ViewChild,
            args: ['carouselList']
        }] }); })();
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/carousel.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// https://github.com/angular/angular/issues/10541#issuecomment-300761387
class MatCarouselHammerConfig extends HammerGestureConfig {
    constructor() {
        super(...arguments);
        this.overrides = {
            pinch: { enable: false },
            rotate: { enable: false }
        };
    }
}
MatCarouselHammerConfig.ɵfac = /*@__PURE__*/ function () { let ɵMatCarouselHammerConfig_BaseFactory; return function MatCarouselHammerConfig_Factory(t) { return (ɵMatCarouselHammerConfig_BaseFactory || (ɵMatCarouselHammerConfig_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatCarouselHammerConfig)))(t || MatCarouselHammerConfig); }; }();
MatCarouselHammerConfig.ɵprov = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjectable({ token: MatCarouselHammerConfig, factory: MatCarouselHammerConfig.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(MatCarouselHammerConfig, [{
        type: Injectable
    }], null, null); })();
if (false) {
    /** @type {?} */
    MatCarouselHammerConfig.prototype.overrides;
}
class MatCarouselModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: MatCarouselModule,
            providers: [
                { provide: HAMMER_GESTURE_CONFIG, useClass: MatCarouselHammerConfig }
            ]
        };
    }
}
MatCarouselModule.ɵfac = function MatCarouselModule_Factory(t) { return new (t || MatCarouselModule)(); };
MatCarouselModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: MatCarouselModule });
MatCarouselModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [[CommonModule, MatButtonModule, MatIconModule, HammerModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(MatCarouselModule, [{
        type: NgModule,
        args: [{
                declarations: [MatCarouselComponent, MatCarouselSlideComponent],
                imports: [CommonModule, MatButtonModule, MatIconModule, HammerModule],
                exports: [MatCarouselComponent, MatCarouselSlideComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MatCarouselModule, { declarations: function () { return [MatCarouselComponent, MatCarouselSlideComponent]; }, imports: function () { return [CommonModule, MatButtonModule, MatIconModule, HammerModule]; }, exports: function () { return [MatCarouselComponent, MatCarouselSlideComponent]; } }); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/carousel.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function MatCarousel() { }
if (false) {
    /** @type {?} */
    MatCarousel.prototype.timings;
    /** @type {?} */
    MatCarousel.prototype.autoplay;
    /** @type {?} */
    MatCarousel.prototype.interval;
    /** @type {?} */
    MatCarousel.prototype.loop;
    /** @type {?} */
    MatCarousel.prototype.hideArrows;
    /** @type {?} */
    MatCarousel.prototype.hideIndicators;
    /** @type {?} */
    MatCarousel.prototype.color;
    /** @type {?} */
    MatCarousel.prototype.maxWidth;
    /** @type {?} */
    MatCarousel.prototype.proportion;
    /** @type {?} */
    MatCarousel.prototype.slides;
    /** @type {?} */
    MatCarousel.prototype.svgIconOverrides;
    /** @type {?} */
    MatCarousel.prototype.useKeyboard;
    /** @type {?} */
    MatCarousel.prototype.useMouseWheel;
    /** @type {?} */
    MatCarousel.prototype.orientation;
}
/**
 * @record
 */
function SvgIconOverrides() { }
if (false) {
    /** @type {?} */
    SvgIconOverrides.prototype.arrowBack;
    /** @type {?} */
    SvgIconOverrides.prototype.arrowForward;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/carousel-slide/carousel-slide.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function MatCarouselSlide() { }
if (false) {
    /** @type {?} */
    MatCarouselSlide.prototype.image;
    /** @type {?} */
    MatCarouselSlide.prototype.overlayColor;
    /** @type {?} */
    MatCarouselSlide.prototype.hideOverlay;
    /** @type {?} */
    MatCarouselSlide.prototype.disabled;
}

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ngbmodule-material-carousel.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { MatCarouselComponent, MatCarouselHammerConfig, MatCarouselModule, MatCarouselSlideComponent };

//# sourceMappingURL=ngbmodule-material-carousel.js.map