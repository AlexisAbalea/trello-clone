import { Component } from '@angular/core';
import { StorageService } from './storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  data: any = {};

  constructor(private storage: StorageService) {
    this.getData();
  }

  saveData() {
    this.storage.set(this.data);
  }

  getData() {
    this.data = this.storage.get();
  }

}
