import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  set(data: any): void {
    try {
      localStorage.setItem('trelloLite', JSON.stringify(data));
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  }

  get() {
    try {
      let storage = localStorage.getItem('trelloLite');
      if (!storage) {
        return {
          tachesTodo: [],
          tachesDoing: [],
          tachesDone: []
        };
      }
      return JSON.parse(storage || '{}');
    } catch (e) {
      console.error('Error getting data from localStorage', e);
      return null;
    }
  }
}
