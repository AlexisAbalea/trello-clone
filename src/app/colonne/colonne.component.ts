import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'colonne',
  templateUrl: './colonne.component.html',
  styleUrls: ['./colonne.component.css'],
})
export class ColonneComponent implements OnInit {

  @Input() nom: string = '';
  @Input() taches: string[] = [];
  @Output() isDragged = new EventEmitter<any>();
  @Output() saveData = new EventEmitter<any>();

  nouvelleTache: string = '';

  enableAdd: boolean = false;

  constructor() { }

  ngOnInit(): void {
    console.log(this.taches);
  }

  addTache(tache: string) {
    this.nouvelleTache = '';
    this.taches.unshift(tache);
    this.saveData.emit();
    this.enableAdd = false;
  }

  onDragStart(event :any, tache: string) {
    event
      .dataTransfer
      .setData('text/plain', tache);
      this.isDragged.emit();
  }

  onDragEnd(event:any, tache: string) {
    if (event.dataTransfer.dropEffect === 'copy') {
      const index = this.taches.findIndex(val => val === tache);
      this.taches.splice(index, 1);
      this.saveData.emit();
    }
    this.isDragged.emit();
  }

  onDragOver(event:any) {
    event.preventDefault();
  }

 onDrop(event:any) {
    const tache = event
    .dataTransfer
    .getData('text');
    this.taches.unshift(tache);
    event.dataTransfer.clearData();
  }

}
