(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/animations'), require('@angular/cdk/a11y'), require('@angular/common'), require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('@angular/platform-browser'), require('@angular/material/button'), require('@angular/material/icon')) :
    typeof define === 'function' && define.amd ? define('@ngbmodule/material-carousel', ['exports', '@angular/animations', '@angular/cdk/a11y', '@angular/common', '@angular/core', 'rxjs', 'rxjs/operators', '@angular/platform-browser', '@angular/material/button', '@angular/material/icon'], factory) :
    (global = global || self, factory((global.ngbmodule = global.ngbmodule || {}, global.ngbmodule['material-carousel'] = {}), global.ng.animations, global.ng.cdk.a11y, global.ng.common, global.ng.core, global.rxjs, global.rxjs.operators, global.ng.platformBrowser, global.ng.material.button, global.ng.material.icon));
}(this, (function (exports, animations, a11y, common, core, rxjs, operators, platformBrowser, button, icon) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/carousel-slide/carousel-slide.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MatCarouselSlideComponent = /** @class */ (function () {
        /**
         * @param {?} sanitizer
         */
        function MatCarouselSlideComponent(sanitizer) {
            this.sanitizer = sanitizer;
            this.overlayColor = '#00000040';
            this.hideOverlay = false;
            this.disabled = false; // implements ListKeyManagerOption
        }
        /**
         * @return {?}
         */
        MatCarouselSlideComponent.prototype.ngOnInit = function () {
            if (this.image) {
                this.image = this.sanitizer.bypassSecurityTrustStyle("url(\"" + this.image + "\")");
            }
        };
        return MatCarouselSlideComponent;
    }());
    MatCarouselSlideComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mat-carousel-slide',
                    template: "<ng-template>\r\n  <div class=\"carousel-slide\" [style.background-image]=\"image\">\r\n    <div class=\"carousel-slide-content\"><ng-content></ng-content></div>\r\n    <div\r\n      *ngIf=\"!hideOverlay\"\r\n      class=\"carousel-slide-overlay\"\r\n      [style.background-color]=\"overlayColor\"\r\n    ></div>\r\n  </div>\r\n</ng-template>\r\n",
                    styles: [".carousel-slide{background-position:50%;background-repeat:no-repeat;background-size:cover}.carousel-slide,.carousel-slide-overlay{height:100%;position:absolute;width:100%;z-index:auto}.carousel-slide-content{height:100%;position:absolute;width:100%;z-index:1}"]
                }] }
    ];
    /** @nocollapse */
    MatCarouselSlideComponent.ctorParameters = function () { return [
        { type: platformBrowser.DomSanitizer }
    ]; };
    MatCarouselSlideComponent.propDecorators = {
        image: [{ type: core.Input }],
        overlayColor: [{ type: core.Input }],
        hideOverlay: [{ type: core.Input }],
        disabled: [{ type: core.Input }],
        templateRef: [{ type: core.ViewChild, args: [core.TemplateRef,] }]
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

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/carousel.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var Direction = {
        Left: 0,
        Right: 1,
        Index: 2,
    };
    Direction[Direction.Left] = 'Left';
    Direction[Direction.Right] = 'Right';
    Direction[Direction.Index] = 'Index';
    var MatCarouselComponent = /** @class */ (function () {
        /**
         * @param {?} animationBuilder
         * @param {?} renderer
         * @param {?} platformId
         */
        function MatCarouselComponent(animationBuilder, renderer, platformId) {
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
            this.animationStart = new core.EventEmitter();
            this.change = new core.EventEmitter();
            this._autoplay = true;
            this.autoplay$ = new rxjs.Subject();
            this.interval$ = new rxjs.BehaviorSubject(5000);
            this.slides$ = new rxjs.BehaviorSubject(null);
            this._maxWidth = 'auto';
            this.maxWidth$ = new rxjs.Subject();
            this._loop = true;
            this.loop$ = new rxjs.Subject();
            this._orientation = 'ltr';
            this.orientation$ = new rxjs.Subject();
            this.timerStop$ = new rxjs.Subject();
            this.destroy$ = new rxjs.Subject();
            this.playing = false;
        }
        Object.defineProperty(MatCarouselComponent.prototype, "autoplay", {
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                this.autoplay$.next(value);
                this._autoplay = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MatCarouselComponent.prototype, "interval", {
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                this.interval$.next(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MatCarouselComponent.prototype, "loop", {
            /**
             * @return {?}
             */
            get: function () {
                return this._loop;
            },
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                this.loop$.next(value);
                this._loop = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MatCarouselComponent.prototype, "maxWidth", {
            /**
             * @return {?}
             */
            get: function () {
                return this._maxWidth;
            },
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                this._maxWidth = value;
                this.maxWidth$.next();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MatCarouselComponent.prototype, "slides", {
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                this.slides$.next(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MatCarouselComponent.prototype, "orientation", {
            /**
             * @return {?}
             */
            get: function () {
                return this._orientation;
            },
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                this.orientation$.next(value);
                this._orientation = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MatCarouselComponent.prototype, "currentIndex", {
            /**
             * @return {?}
             */
            get: function () {
                if (this.listKeyManager) {
                    return this.listKeyManager.activeItemIndex;
                }
                return 0;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MatCarouselComponent.prototype, "currentSlide", {
            /**
             * @return {?}
             */
            get: function () {
                if (this.listKeyManager) {
                    return this.listKeyManager.activeItem;
                }
                return null;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @return {?}
         */
        MatCarouselComponent.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.listKeyManager = new a11y.ListKeyManager(this.slidesList)
                .withVerticalOrientation(false)
                .withHorizontalOrientation(this._orientation)
                .withWrap(this._loop);
            this.listKeyManager.updateActiveItem(0);
            this.listKeyManager.change
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(( /**
         * @return {?}
         */function () { return _this.playAnimation(); }));
        };
        /**
         * @return {?}
         */
        MatCarouselComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.autoplay$.pipe(operators.takeUntil(this.destroy$)).subscribe(( /**
             * @param {?} value
             * @return {?}
             */function (/**
             * @param {?} value
             * @return {?}
             */ value) {
                _this.stopTimer();
                _this.startTimer(value);
            }));
            this.interval$.pipe(operators.takeUntil(this.destroy$)).subscribe(( /**
             * @param {?} value
             * @return {?}
             */function (/**
             * @param {?} value
             * @return {?}
             */ value) {
                _this.stopTimer();
                _this.resetTimer(value);
                _this.startTimer(_this._autoplay);
            }));
            this.maxWidth$
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(( /**
         * @return {?}
         */function () { return _this.slideTo(0); }));
            this.loop$
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(( /**
         * @param {?} value
         * @return {?}
         */function (/**
         * @param {?} value
         * @return {?}
         */ value) { return _this.listKeyManager.withWrap(value); }));
            this.orientation$
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(( /**
         * @param {?} value
         * @return {?}
         */function (/**
         * @param {?} value
         * @return {?}
         */ value) { return _this.listKeyManager.withHorizontalOrientation(value); }));
            this.slides$
                .pipe(operators.takeUntil(this.destroy$), operators.filter(( /**
         * @param {?} value
         * @return {?}
         */function (/**
         * @param {?} value
         * @return {?}
         */ value) { return value && value < _this.slidesList.length; })))
                .subscribe(( /**
         * @param {?} value
         * @return {?}
         */function (/**
         * @param {?} value
         * @return {?}
         */ value) { return _this.resetSlides(value); }));
        };
        /**
         * @return {?}
         */
        MatCarouselComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        /**
         * @return {?}
         */
        MatCarouselComponent.prototype.next = function () {
            this.goto(Direction.Right);
        };
        /**
         * @return {?}
         */
        MatCarouselComponent.prototype.previous = function () {
            this.goto(Direction.Left);
        };
        /**
         * @param {?} index
         * @return {?}
         */
        MatCarouselComponent.prototype.slideTo = function (index) {
            this.goto(Direction.Index, index);
        };
        /**
         * @param {?} event
         * @return {?}
         */
        MatCarouselComponent.prototype.onKeyUp = function (event) {
            if (this.useKeyboard && !this.playing) {
                this.listKeyManager.onKeydown(event);
            }
        };
        /**
         * @return {?}
         */
        MatCarouselComponent.prototype.onMouseEnter = function () {
            if (this.pauseOnHover) {
                this.stopTimer();
            }
        };
        /**
         * @return {?}
         */
        MatCarouselComponent.prototype.onMouseLeave = function () {
            if (this.pauseOnHover) {
                this.startTimer(this._autoplay);
            }
        };
        /**
         * @param {?} event
         * @return {?}
         */
        MatCarouselComponent.prototype.onMouseWheel = function (event) {
            if (this.useMouseWheel) {
                event.preventDefault(); // prevent window to scroll
                // prevent window to scroll
                /** @type {?} */
                var Δ = Math.sign(event.deltaY);
                if (Δ > 0) {
                    this.next();
                }
                else if (Δ < 0) {
                    this.previous();
                }
            }
        };
        /**
         * @param {?} event
         * @return {?}
         */
        MatCarouselComponent.prototype.onResize = function (event) {
            // Reset carousel when window is resized
            // in order to avoid major glitches.
            this.slideTo(0);
        };
        /**
         * @param {?} event
         * @param {?} slideElem
         * @return {?}
         */
        MatCarouselComponent.prototype.onPan = function (event, slideElem) {
            // https://github.com/angular/angular/issues/10541#issuecomment-346539242
            // if y velocity is greater, it's a panup/pandown, so ignore.
            if (Math.abs(event.velocityY) > Math.abs(event.velocityX)) {
                return;
            }
            /** @type {?} */
            var Δx = event.deltaX;
            if (this.isOutOfBounds()) {
                Δx *= 0.2; // decelerate movement;
            }
            this.renderer.setStyle(slideElem, 'cursor', 'grabbing');
            this.renderer.setStyle(this.carouselList.nativeElement, 'transform', this.getTranslation(this.getOffset() + Δx));
        };
        /**
         * @param {?} event
         * @param {?} slideElem
         * @return {?}
         */
        MatCarouselComponent.prototype.onPanEnd = function (event, slideElem) {
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
        };
        /**
         * @private
         * @return {?}
         */
        MatCarouselComponent.prototype.isOutOfBounds = function () {
            /** @type {?} */
            var sign = this.orientation === 'rtl' ? -1 : 1;
            /** @type {?} */
            var left = sign *
                (this.carouselList.nativeElement.getBoundingClientRect().left -
                    this.carouselList.nativeElement.offsetParent.getBoundingClientRect()
                        .left);
            /** @type {?} */
            var lastIndex = this.slidesList.length - 1;
            /** @type {?} */
            var width = -this.getWidth() * lastIndex;
            return ((this.listKeyManager.activeItemIndex === 0 && left >= 0) ||
                (this.listKeyManager.activeItemIndex === lastIndex && left <= width));
        };
        /**
         * @private
         * @return {?}
         */
        MatCarouselComponent.prototype.isVisible = function () {
            if (!common.isPlatformBrowser(this.platformId)) {
                return false;
            }
            /** @type {?} */
            var elem = this.carouselContainer.nativeElement;
            /** @type {?} */
            var docViewTop = window.pageYOffset;
            /** @type {?} */
            var docViewBottom = docViewTop + window.innerHeight;
            /** @type {?} */
            var elemOffset = elem.getBoundingClientRect();
            /** @type {?} */
            var elemTop = docViewTop + elemOffset.top;
            /** @type {?} */
            var elemBottom = elemTop + elemOffset.height;
            return elemBottom <= docViewBottom || elemTop >= docViewTop;
        };
        /**
         * @private
         * @return {?}
         */
        MatCarouselComponent.prototype.getOffset = function () {
            /** @type {?} */
            var offset = this.listKeyManager.activeItemIndex * this.getWidth();
            /** @type {?} */
            var sign = this.orientation === 'rtl' ? 1 : -1;
            return sign * offset;
        };
        /**
         * @private
         * @param {?} offset
         * @return {?}
         */
        MatCarouselComponent.prototype.getTranslation = function (offset) {
            return "translateX(" + offset + "px)";
        };
        /**
         * @private
         * @return {?}
         */
        MatCarouselComponent.prototype.getWidth = function () {
            return this.carouselContainer.nativeElement.clientWidth;
        };
        /**
         * @private
         * @param {?} direction
         * @param {?=} index
         * @return {?}
         */
        MatCarouselComponent.prototype.goto = function (direction, index) {
            if (!this.playing) {
                /** @type {?} */
                var rtl = this.orientation === 'rtl';
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
        };
        /**
         * @private
         * @return {?}
         */
        MatCarouselComponent.prototype.playAnimation = function () {
            var _this = this;
            /** @type {?} */
            var translation = this.getTranslation(this.getOffset());
            /** @type {?} */
            var factory = this.animationBuilder.build(animations.animate(this.timings, animations.style({ transform: translation })));
            /** @type {?} */
            var animation = factory.create(this.carouselList.nativeElement);
            animation.onStart(( /**
             * @return {?}
             */function () {
                _this.playing = true;
                _this.animationStart.emit(_this.currentIndex);
            }));
            animation.onDone(( /**
             * @return {?}
             */function () {
                _this.change.emit(_this.currentIndex);
                _this.playing = false;
                _this.renderer.setStyle(_this.carouselList.nativeElement, 'transform', translation);
                animation.destroy();
            }));
            animation.play();
        };
        /**
         * @private
         * @param {?} slides
         * @return {?}
         */
        MatCarouselComponent.prototype.resetSlides = function (slides) {
            this.slidesList.reset(this.slidesList.toArray().slice(0, slides));
        };
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        MatCarouselComponent.prototype.resetTimer = function (value) {
            this.timer$ = rxjs.interval(value);
        };
        /**
         * @private
         * @param {?} autoplay
         * @return {?}
         */
        MatCarouselComponent.prototype.startTimer = function (autoplay) {
            var _this = this;
            if (!autoplay) {
                return;
            }
            this.timer$
                .pipe(operators.takeUntil(this.timerStop$), operators.takeUntil(this.destroy$), operators.filter(( /**
         * @return {?}
         */function () { return _this.isVisible(); })))
                .subscribe(( /**
         * @return {?}
         */function () {
                _this.listKeyManager.withWrap(true).setNextItemActive();
                _this.listKeyManager.withWrap(_this.loop);
            }));
        };
        /**
         * @private
         * @return {?}
         */
        MatCarouselComponent.prototype.stopTimer = function () {
            this.timerStop$.next();
        };
        return MatCarouselComponent;
    }());
    MatCarouselComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mat-carousel',
                    template: "<div\r\n  #carouselContainer\r\n  class=\"carousel\"\r\n  tabindex=\"0\"\r\n  [style.max-width]=\"maxWidth\"\r\n  [style.height]=\"!maintainAspectRatio ? '100%' : 'auto'\"\r\n>\r\n  <ul\r\n    #carouselList\r\n    class=\"carousel-list\"\r\n    role=\"listbox\"\r\n    [style.flex-direction]=\"orientation === 'rtl' ? 'row-reverse' : 'row'\"\r\n    [style.height]=\"!maintainAspectRatio ? '100%' : 'auto'\"\r\n  >\r\n    <li\r\n      #carouselSlide\r\n      *ngFor=\"let slide of slidesList\"\r\n      class=\"carousel-slide\"\r\n      role=\"option\"\r\n      [style.padding-bottom]=\"maintainAspectRatio && proportion ? proportion + '%': '0px'\"\r\n      [style.height]=\"!maintainAspectRatio && slideHeight ? slideHeight : '0px'\"\r\n      (panleft)=\"onPan($event, carouselSlide)\"\r\n      (panright)=\"onPan($event, carouselSlide)\"\r\n      (panend)=\"onPanEnd($event, carouselSlide)\"\r\n      (pancancel)=\"onPanEnd($event, carouselSlide)\"\r\n    >\r\n      <ng-container [ngTemplateOutlet]=\"slide.templateRef\"></ng-container>\r\n    </li>\r\n  </ul>\r\n\r\n  <button\r\n    *ngIf=\"!hideArrows\"\r\n    mat-icon-button\r\n    type=\"button\"\r\n    tabindex=\"-1\"\r\n    [color]=\"color\"\r\n    [disabled]=\"!loop && currentIndex == 0\"\r\n    (click)=\"previous()\"\r\n  >\r\n    <mat-icon\r\n      *ngIf=\"svgIconOverrides?.arrowBack; else: defaultArrowBack\"\r\n      [svgIcon]=\"svgIconOverrides.arrowBack\"\r\n    ></mat-icon>\r\n    <ng-template #defaultArrowBack>\r\n      <mat-icon>arrow_back</mat-icon>\r\n    </ng-template>\r\n  </button>\r\n  <button\r\n    *ngIf=\"!hideArrows\"\r\n    mat-icon-button\r\n    type=\"button\"\r\n    tabindex=\"-1\"\r\n    [color]=\"color\"\r\n    [disabled]=\"!loop && currentIndex == slidesList.length - 1\"\r\n    (click)=\"next()\"\r\n  >\r\n    <mat-icon\r\n      *ngIf=\"svgIconOverrides?.arrowForward; else: defaultArrowForward\"\r\n      [svgIcon]=\"svgIconOverrides.arrowForward\"\r\n    ></mat-icon>\r\n    <ng-template #defaultArrowForward>\r\n      <mat-icon>arrow_forward</mat-icon>\r\n    </ng-template>\r\n  </button>\r\n\r\n  <div\r\n    *ngIf=\"!hideIndicators\"\r\n    class=\"carousel-indicators\"\r\n    tabindex=\"-1\"\r\n    [style.flex-direction]=\"orientation === 'rtl' ? 'row-reverse' : 'row'\"\r\n  >\r\n    <button\r\n      *ngFor=\"let slide of slidesList; let i = index\"\r\n      type=\"button\"\r\n      tabindex=\"-1\"\r\n      mat-mini-fab\r\n      [color]=\"color\"\r\n      [disabled]=\"i == currentIndex\"\r\n      (click)=\"slideTo(i)\"\r\n      (focus)=\"carouselContainer.focus()\"\r\n    ></button>\r\n  </div>\r\n</div>\r\n",
                    styles: [".carousel{outline:none;overflow:hidden;position:relative;width:100%}.carousel>button{position:absolute;top:50%;transform:translateY(-50%);z-index:1}.carousel>button:first-of-type{left:30px}.carousel>button:last-of-type{right:30px}.carousel-list{list-style:none;margin:0;padding:0}.carousel-list,.carousel-slide{display:flex;position:relative;width:100%}.carousel-slide{flex-shrink:0;height:0}.carousel-slide:hover{cursor:-webkit-grab;cursor:grab}.carousel-indicators{bottom:15px;display:flex;left:50%;outline:none;position:absolute;transform:translateX(-50%);z-index:1}.carousel-indicators>button{height:10px;margin:7.5px;width:10px}"]
                }] }
    ];
    /** @nocollapse */
    MatCarouselComponent.ctorParameters = function () { return [
        { type: animations.AnimationBuilder },
        { type: core.Renderer2 },
        { type: undefined, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] }] }
    ]; };
    MatCarouselComponent.propDecorators = {
        timings: [{ type: core.Input }],
        svgIconOverrides: [{ type: core.Input }],
        autoplay: [{ type: core.Input }],
        interval: [{ type: core.Input }],
        loop: [{ type: core.Input }],
        hideArrows: [{ type: core.Input }],
        hideIndicators: [{ type: core.Input }],
        pauseOnHover: [{ type: core.Input }],
        color: [{ type: core.Input }],
        maxWidth: [{ type: core.Input }],
        maintainAspectRatio: [{ type: core.Input }],
        proportion: [{ type: core.Input }],
        slideHeight: [{ type: core.Input }],
        slides: [{ type: core.Input }],
        useKeyboard: [{ type: core.Input }],
        useMouseWheel: [{ type: core.Input }],
        orientation: [{ type: core.Input }],
        animationStart: [{ type: core.Output }],
        change: [{ type: core.Output }],
        slidesList: [{ type: core.ContentChildren, args: [MatCarouselSlideComponent,] }],
        carouselContainer: [{ type: core.ViewChild, args: ['carouselContainer',] }],
        carouselList: [{ type: core.ViewChild, args: ['carouselList',] }],
        onKeyUp: [{ type: core.HostListener, args: ['keyup', ['$event'],] }],
        onMouseEnter: [{ type: core.HostListener, args: ['mouseenter',] }],
        onMouseLeave: [{ type: core.HostListener, args: ['mouseleave',] }],
        onMouseWheel: [{ type: core.HostListener, args: ['mousewheel', ['$event'],] }],
        onResize: [{ type: core.HostListener, args: ['window:resize', ['$event'],] }]
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

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, exports) {
        for (var p in m)
            if (p !== "default" && !exports.hasOwnProperty(p))
                __createBinding(exports, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (Object.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    // https://github.com/angular/angular/issues/10541#issuecomment-300761387
    var MatCarouselHammerConfig = /** @class */ (function (_super) {
        __extends(MatCarouselHammerConfig, _super);
        function MatCarouselHammerConfig() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            _this.overrides = {
                pinch: { enable: false },
                rotate: { enable: false }
            };
            return _this;
        }
        return MatCarouselHammerConfig;
    }(platformBrowser.HammerGestureConfig));
    MatCarouselHammerConfig.decorators = [
        { type: core.Injectable }
    ];
    if (false) {
        /** @type {?} */
        MatCarouselHammerConfig.prototype.overrides;
    }
    var MatCarouselModule = /** @class */ (function () {
        function MatCarouselModule() {
        }
        /**
         * @return {?}
         */
        MatCarouselModule.forRoot = function () {
            return {
                ngModule: MatCarouselModule,
                providers: [
                    { provide: platformBrowser.HAMMER_GESTURE_CONFIG, useClass: MatCarouselHammerConfig }
                ]
            };
        };
        return MatCarouselModule;
    }());
    MatCarouselModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [MatCarouselComponent, MatCarouselSlideComponent],
                    imports: [common.CommonModule, button.MatButtonModule, icon.MatIconModule, platformBrowser.HammerModule],
                    exports: [MatCarouselComponent, MatCarouselSlideComponent]
                },] }
    ];

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

    exports.MatCarouselComponent = MatCarouselComponent;
    exports.MatCarouselHammerConfig = MatCarouselHammerConfig;
    exports.MatCarouselModule = MatCarouselModule;
    exports.MatCarouselSlideComponent = MatCarouselSlideComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngbmodule-material-carousel.umd.js.map
