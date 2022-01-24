import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'colonne',
  templateUrl: './colonne.component.html',
  styleUrls: ['./colonne.component.css'],
})
export class ColonneComponent implements OnInit {

  @Input() nom: string = '';
  @Input() taches: string[] = [];
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

 drop(event: CdkDragDrop<string[]>) {
  if (event.previousContainer === event.container) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  } else {
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex,
    );
  }
  this.saveData.emit();
}

}
