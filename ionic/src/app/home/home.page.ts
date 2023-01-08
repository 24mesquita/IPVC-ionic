import { ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';



export class TabInfoPage {
  constructor(
  private translateService : TranslateService,
  private toastController : ToastController) {
  }
  async showToast() {
  const toast = await this.toastController.create({
  message: this.translateService.instant("hello"),
  duration: 4000,
  });
  await toast.present();
  }
  }
