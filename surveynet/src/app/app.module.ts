import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {SharedModule} from "./shared/shared.module";
import {LoginModule} from "./login/login.module";
import {SurveysModule} from "./surveys/surveys.module";
import {SettingsModule} from "./settings/settings.module";
import {StatisticsModule} from "./statistics/statistics.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    LoginModule,
    SurveysModule,
    SettingsModule,
    StatisticsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
