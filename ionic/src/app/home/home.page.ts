import { HttpClient } from '@angular/common/http';
import { LocalizationService } from './../services/localization/localization.service';
import { Preferences } from '@capacitor/preferences';
import { TranslateService } from '@ngx-translate/core';
import { Component, Input, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  isModalOpen2 = false;

  setOpen2(isOpen: boolean) {
    this.isModalOpen2 = isOpen;
  }
  me: any = {};
  @Input() isChecked : boolean | undefined;

  constructor(
    private translateService: TranslateService,
    private toastController: ToastController,
    private LocalizationService: LocalizationService,
    private http: HttpClient
  ) {}

  async ngOnInit() {
    this.me = await firstValueFrom(
      this.http.get('http://localhost:4242/api/me')
    );
  }

  async changeLanguage(language: string) {
    await Preferences.set({ key: 'user-lang', value: language });
    await this.LocalizationService.setLanguage(language);
    await this.showToast();
  }

  async showToast() {
    const toast = await this.toastController.create({
      message: this.translateService.instant('language as been changed'),
      duration: 4000,
    });
    await toast.present();
  }

  toggleTheme(event: any) {
    console.log(event);
    if (event.detail.checked) {
      document.body.setAttribute('color-theme', 'dark');
    } else {
      document.body.setAttribute('color-theme', 'light');
    }
  }

  async changeDarkMode() {
    this.isChecked = !this.isChecked

    await Preferences.set({
      key: 'dark-mode',
      value: this.isChecked ? 'true' : 'false',
    })

    if (this.isChecked) {
      document.body.setAttribute('color-theme', 'dark');
    }
    else {
      document.body.setAttribute('color-theme', 'light');
    }
  }

  getIcon() {
    if(this.isChecked){
      return 'sunny';
    }
    return 'moon';
  }
}

