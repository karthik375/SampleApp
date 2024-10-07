import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import {
  EpCore2Module,
  EpLocalizationService,
  EpApplicationModule,
  EpShellModule,
  EpEulaModule,
  EpInternationalConfigService,
  EpInternationalizationService
} from '@epicor/ux-platform';

import { IntlModule } from "@progress/kendo-angular-intl";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppLocalizationStrings } from './app.localization.strings';
import { AboutComponent } from './about/about.component';
import { EpCardModule } from '@epicor/ux-platform';

/**
 * Localization import.
 */
import localeNl from '@angular/common/locales/nl';
import localeEn from '@angular/common/locales/en';
import localeZh from '@angular/common/locales/zh';
import localeDe from '@angular/common/locales/de';
import localeEs from '@angular/common/locales/es';
import localeFr from '@angular/common/locales/fr';
import localeRu from '@angular/common/locales/ru';
import localeFi from '@angular/common/locales/fi';
import localeLt from '@angular/common/locales/lt';
import localeEsMX from '@angular/common/locales/es-MX';

import '@progress/kendo-angular-intl/locales/nl/all';
import '@progress/kendo-angular-intl/locales/en/all';
import '@progress/kendo-angular-intl/locales/zh/all';
import '@progress/kendo-angular-intl/locales/de/all';
import '@progress/kendo-angular-intl/locales/es/all';
import '@progress/kendo-angular-intl/locales/fr/all';
import '@progress/kendo-angular-intl/locales/ru/all';
import '@progress/kendo-angular-intl/locales/fi/all';
import '@progress/kendo-angular-intl/locales/lt/all';
import '@progress/kendo-angular-intl/locales/es-MX/all';

@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    EpShellModule,
    EpApplicationModule,
    EpEulaModule,
    EpCore2Module.forRoot(),
    IntlModule,
    EpCardModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: ""
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public epIntl: EpInternationalizationService) {
    
    /**
     * Register the application localization strings to be translated.
     */
    EpLocalizationService.registerStrings(AppLocalizationStrings);

    /**
     * Register Locales.
     */
    EpInternationalConfigService.registerLocale(localeNl, 'nl');
    EpInternationalConfigService.registerLocale(localeEn, 'en');
    EpInternationalConfigService.registerLocale(localeZh, 'zh');
    EpInternationalConfigService.registerLocale(localeDe, 'de');
    EpInternationalConfigService.registerLocale(localeEs, 'es');
    EpInternationalConfigService.registerLocale(localeFi, 'fi');
    EpInternationalConfigService.registerLocale(localeFr, 'fr');
    EpInternationalConfigService.registerLocale(localeRu, 'ru');
    EpInternationalConfigService.registerLocale(localeLt, 'lt');
    EpInternationalConfigService.registerLocale(localeEsMX, 'es-MX');
    epIntl.getCurrentLocaleObject();
  }
}
