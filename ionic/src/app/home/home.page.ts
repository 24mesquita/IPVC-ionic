import { CrudService } from './../services/api/crud.service';

import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalizationService } from './../services/localization/localization.service';
import { Preferences } from '@capacitor/preferences';
import { ToastController } from '@ionic/angular';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  isModalOpen2 = false;

  setOpen2(isOpen: boolean) {
    this.isModalOpen2 = isOpen;
  }
  info: any = {};
  skills: any = [];
  languages: any = [];
  competences: any = [];

  @Input() isChecked : boolean | undefined;

  constructor(
    private translateService: TranslateService,
    private toastController: ToastController,
    private LocalizationService: LocalizationService,
    private http: HttpClient,
    private crudService: CrudService

  ) { }

    //get data from api

  ngOnInit() {
      this.getinfo();
      this.getskills();
      this.getlanguages();
      this.getcompetences();
  }


  async getinfo() {
    this.crudService.getdata('info/getinfo').subscribe((res) => {
      this.info = res;
      console.log(this.info);
    });
  }

  async getskills() {
    this.crudService.getdata('skills/getSkills').subscribe((res) => {
      this.skills = res;
      console.log(this.skills);
    });
  }

  async getlanguages() {
    this.crudService.getdata('languages/getLanguages').subscribe((res) => {
      this.languages = res;
      console.log(this.languages);
    });
  }

  async getcompetences() {
    this.crudService.getdata('competences/getCompetences').subscribe((res) => {
      this.competences = res;
      console.log(this.competences);
    });
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

