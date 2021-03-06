import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from'@angular/http';

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
import { find1Page } from '../pages/find1/find1';
import { find2Page } from '../pages/find2/find2';
import { find3Page } from '../pages/find3/find3';
import { find4Page } from '../pages/find4/find4';
import { find5Page } from '../pages/find5/find5';
import { zizhuPage } from '../pages/select1/zizhu/zizhu';
import { huoguoPage } from '../pages/select1/huoguo/huoguo';
import { xicanPage } from '../pages/select1/xican/xican';
import { riliaoPage } from '../pages/select1/riliao/riliao';
import { ziranPage } from '../pages/select2/ziran/ziran';
import { rengongPage } from '../pages/select2/rengong/rengong';
import { jingjiPage } from '../pages/zhusu/jingji/jingji';
import { mingsuPage } from '../pages/zhusu/mingsu/mingsu';
import { shushiPage } from '../pages/zhusu/shushi/shushi';
import { yanxuanPage } from '../pages/zhusu/yanxuan/yanxuan';



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
    find1Page,
    find2Page,
    find3Page,
    find4Page,
    find5Page,
    zizhuPage,
    huoguoPage,
    xicanPage,
    riliaoPage,
    ziranPage,
    rengongPage,
    jingjiPage,
    mingsuPage,
    shushiPage,
    yanxuanPage,



  ],
  imports: [
    BrowserModule,
    HttpModule,
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
    find1Page,
    find2Page,
    find3Page,
    find4Page,
    find5Page,
    zizhuPage,
    huoguoPage,
    xicanPage,
    riliaoPage,
    ziranPage,
    rengongPage,
    jingjiPage,
    mingsuPage,
    shushiPage,
    yanxuanPage,


  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
