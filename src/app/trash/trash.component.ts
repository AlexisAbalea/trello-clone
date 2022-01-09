import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.css']
})
export class TrashComponent implements OnInit {

  @Input() isDragged: boolean = false;

  isDragOver: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onDragOver(event:any) {
    this.isDragOver = true;
    event.preventDefault();
  }

 onDrop(event:any) {
    this.isDragOver = false;
    event.dataTransfer.clearData();
  }

}
