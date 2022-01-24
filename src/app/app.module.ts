import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ColonneComponent } from './colonne/colonne.component';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrashComponent } from './trash/trash.component';
import { StorageService } from './storage.service';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    ColonneComponent,
    CardComponent,
    TrashComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
