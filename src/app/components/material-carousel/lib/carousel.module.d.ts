import { HammerGestureConfig } from '@angular/platform-browser';
import { ModuleWithProviders } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './carousel.component';
import * as ɵngcc2 from './carousel-slide/carousel-slide.component';
import * as ɵngcc3 from '@angular/common';
import * as ɵngcc4 from '@angular/material/button';
import * as ɵngcc5 from '@angular/material/icon';
import * as ɵngcc6 from '@angular/platform-browser';
export declare class MatCarouselHammerConfig extends HammerGestureConfig {
    overrides: {
        pinch: {
            enable: boolean;
        };
        rotate: {
            enable: boolean;
        };
    };
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<MatCarouselHammerConfig, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDeclaration<MatCarouselHammerConfig>;
}
export declare class MatCarouselModule {
  static forRoot(): (ModuleWithProviders<MatCarouselModule>)&{ngModule:MatCarouselModule};
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<MatCarouselModule, never>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDeclaration<MatCarouselModule, [typeof ɵngcc1.MatCarouselComponent, typeof ɵngcc2.MatCarouselSlideComponent], [typeof ɵngcc3.CommonModule, typeof ɵngcc4.MatButtonModule, typeof ɵngcc5.MatIconModule, typeof ɵngcc6.HammerModule], [typeof ɵngcc1.MatCarouselComponent, typeof ɵngcc2.MatCarouselSlideComponent]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDeclaration<MatCarouselModule>;
}

//# sourceMappingURL=carousel.module.d.ts.map
