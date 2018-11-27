import { ListsComponent } from './../components/lists.component';
import { AddPage } from './../pages/add/add.component';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { PendingPage } from '../pages/pending/pending.component';
import { FinishedPage } from '../pages/finished/finished.component';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Services
import { WishesService } from '../services/wishes.service';
import { CompletedFilterPipe } from '../pipes/completed-filter/completed-filter';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PendingPage,
    FinishedPage,
    AddPage,
    CompletedFilterPipe,
    ListsComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    PendingPage,
    FinishedPage,
    AddPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    WishesService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
