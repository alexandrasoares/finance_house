import { AuthService } from './core/services/auth.service';
import { Router } from '@angular/router';
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
    // { title: 'Inicio', url: 'home', icon: 'home' },
    { title: 'Finanças', url: 'movimentos', icon: 'stats-chart-outline' },
    { title: 'Familia', url: 'contribuintes', icon: 'people-outline' }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    private popoverController: PopoverController,
    private router: Router
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

  isLogado(): boolean {
    return this.authService.isLogado();
  }

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