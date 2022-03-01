/**
 * @fileoverview added by tsickle
 * Generated from: lib/carousel.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCarouselComponent } from './carousel.component';
import { MatCarouselSlideComponent } from './carousel-slide/carousel-slide.component';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG, HammerModule } from '@angular/platform-browser';
// https://github.com/angular/angular/issues/10541#issuecomment-300761387
export class MatCarouselHammerConfig extends HammerGestureConfig {
    constructor() {
        super(...arguments);
        this.overrides = {
            pinch: { enable: false },
            rotate: { enable: false }
        };
    }
}
MatCarouselHammerConfig.decorators = [
    { type: Injectable }
];
if (false) {
    /** @type {?} */
    MatCarouselHammerConfig.prototype.overrides;
}
export class MatCarouselModule {
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
MatCarouselModule.decorators = [
    { type: NgModule, args: [{
                declarations: [MatCarouselComponent, MatCarouselSlideComponent],
                imports: [CommonModule, MatButtonModule, MatIconModule, HammerModule],
                exports: [MatCarouselComponent, MatCarouselSlideComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvY2Fyb3VzZWwvc3JjL2xpYi9jYXJvdXNlbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV2RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN0RixPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLHFCQUFxQixFQUNyQixZQUFZLEVBQ2IsTUFBTSwyQkFBMkIsQ0FBQzs7QUFLbkMsTUFBTSxPQUFPLHVCQUF3QixTQUFRLG1CQUFtQjtJQURoRTs7UUFFRSxjQUFTLEdBQUc7WUFDVixLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO1lBQ3hCLE1BQU0sRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7U0FDMUIsQ0FBQztJQUNKLENBQUM7OztZQU5BLFVBQVU7Ozs7SUFFVCw0Q0FHRTs7QUFPSixNQUFNLE9BQU8saUJBQWlCOzs7O0lBQzVCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsU0FBUyxFQUFFO2dCQUNULEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSx1QkFBdUIsRUFBRTthQUN0RTtTQUNGLENBQUM7SUFDSixDQUFDOzs7WUFiRixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsb0JBQW9CLEVBQUUseUJBQXlCLENBQUM7Z0JBQy9ELE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLFlBQVksQ0FBQztnQkFDckUsT0FBTyxFQUFFLENBQUMsb0JBQW9CLEVBQUUseUJBQXlCLENBQUM7YUFDM0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xyXG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XHJcblxyXG5pbXBvcnQgeyBNYXRDYXJvdXNlbENvbXBvbmVudCB9IGZyb20gJy4vY2Fyb3VzZWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWF0Q2Fyb3VzZWxTbGlkZUNvbXBvbmVudCB9IGZyb20gJy4vY2Fyb3VzZWwtc2xpZGUvY2Fyb3VzZWwtc2xpZGUuY29tcG9uZW50JztcclxuaW1wb3J0IHtcclxuICBIYW1tZXJHZXN0dXJlQ29uZmlnLFxyXG4gIEhBTU1FUl9HRVNUVVJFX0NPTkZJRyxcclxuICBIYW1tZXJNb2R1bGVcclxufSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyL3NyYy9jb3JlJztcclxuXHJcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzEwNTQxI2lzc3VlY29tbWVudC0zMDA3NjEzODdcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTWF0Q2Fyb3VzZWxIYW1tZXJDb25maWcgZXh0ZW5kcyBIYW1tZXJHZXN0dXJlQ29uZmlnIHtcclxuICBvdmVycmlkZXMgPSB7XHJcbiAgICBwaW5jaDogeyBlbmFibGU6IGZhbHNlIH0sXHJcbiAgICByb3RhdGU6IHsgZW5hYmxlOiBmYWxzZSB9XHJcbiAgfTtcclxufVxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW01hdENhcm91c2VsQ29tcG9uZW50LCBNYXRDYXJvdXNlbFNsaWRlQ29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBNYXRCdXR0b25Nb2R1bGUsIE1hdEljb25Nb2R1bGUsIEhhbW1lck1vZHVsZV0sXHJcbiAgZXhwb3J0czogW01hdENhcm91c2VsQ29tcG9uZW50LCBNYXRDYXJvdXNlbFNsaWRlQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWF0Q2Fyb3VzZWxNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IE1hdENhcm91c2VsTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICB7IHByb3ZpZGU6IEhBTU1FUl9HRVNUVVJFX0NPTkZJRywgdXNlQ2xhc3M6IE1hdENhcm91c2VsSGFtbWVyQ29uZmlnIH1cclxuICAgICAgXVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19