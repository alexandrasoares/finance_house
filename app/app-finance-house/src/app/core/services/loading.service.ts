import { LoadingController } from '@ionic/angular';
import { loadingController } from '@ionic/core';
import { Injectable } from '@angular/core';

@Injectable()
export class LoadingService {

    constructor(
        // private loadingController: LoadingController
        ) {
    }

    public showLoading(message = 'Carregando..', spinnerType: any = 'crescent'): void {
        loadingController.create({
            message,
            spinner: spinnerType,
            showBackdrop: false
        }).then((loading) => loading.present());
    }

    public dismissLoading(): void {
        loadingController.dismiss();
    }
}
