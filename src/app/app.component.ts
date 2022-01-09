import { Component } from '@angular/core';
import { StorageService } from './storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  data: any = {};

  isDragged = false;

  constructor(private storage: StorageService) {
    this.getData();
  }

  eventIsDragged() {
    this.isDragged = !this.isDragged;
  }

  saveData() {
    this.storage.set(this.data);
  }

  getData() {
    this.data = this.storage.get();
  }


}
