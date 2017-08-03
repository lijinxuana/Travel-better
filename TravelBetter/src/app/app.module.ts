import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { FindPage } from '../pages/find/find';
import { NeighborPage } from '../pages/neighbor/neighbor';
import { HomePage } from '../pages/home/home';
import { MePage } from '../pages/me/me';
import { TabsPage } from '../pages/tabs/tabs';
import { SelectfoodPage } from '../pages/select/selectfood';
import { SelectspotPage } from '../pages/select/selectspot';
import { SelectbedroomPage } from '../pages/select/selectbedroom';
import { SelectfunPage } from '../pages/select/selectfun';
import { dengluPage } from '../pages/denglu/denglu';
import { bangzhuPage } from '../pages/bangzhu/bangzhu';
import { gerenziliaoPage } from '../pages/gerenziliao/gerenziliao';
import { tuijianPage } from '../pages/tuijian/tuijian';
import { zhanghaoshezhiPage } from '../pages/zhanghaoshezhi/zhanghaoshezhi';
import { zhucePage } from '../pages/zhuce/zhuce';




import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    FindPage,
    NeighborPage,
    MePage,
    HomePage,
    TabsPage,
    SelectfoodPage,
    SelectspotPage,
    SelectbedroomPage,
    SelectfunPage,
    dengluPage,
    bangzhuPage,
    gerenziliaoPage,
    tuijianPage,
    zhanghaoshezhiPage,
    zhucePage,





  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FindPage,
    MePage,
    NeighborPage,
    HomePage,
    TabsPage,
    SelectfoodPage,
    SelectspotPage,
    SelectbedroomPage,
    SelectfunPage,
    dengluPage,
    bangzhuPage,
    gerenziliaoPage,
    tuijianPage,
    zhanghaoshezhiPage,
    zhucePage,


  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
