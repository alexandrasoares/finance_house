import { Component } from '@angular/core';

import { Platform, PopoverController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MenuMaisOpcoesPage } from './menu-mais-opcoes/menu-mais-opcoes.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  appPages: {title: string, url: string, icon: string}[] = [
    { title: 'Inicio', url: 'home', icon: 'home' },
    { title: 'Movimentos', url: 'movimentos', icon: 'list' },
    { title: 'Cartões', url: 'cartoes', icon: 'card' }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private popoverController: PopoverController,
    // private fcm: FCM
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      // this.initFirebaseMessaging();
    });
  }

  // isLogado(): boolean {
  //   return this.authService.isLogado();
  // }

  showOtherOptions(ev: any): void {
    this.popoverController.create({
      component: MenuMaisOpcoesPage,
      event: ev
    }).then((popover) => popover.present());
  }

  // private initFirebaseMessaging(): void {
  //   this.fcm.onNotification().subscribe((notification: NotificationData) => {
  //     const isBackground: boolean = notification.wasTapped;

  //     if (!isBackground) {
  //       this.toast.showInfoToast(notification.body, 0, true);
  //     }

  //     // Marca notificação como recebida..
  //     this.notificationService.markAsReceived(Number.parseInt(notification.id)).subscribe();
  //   })
  // }
}
