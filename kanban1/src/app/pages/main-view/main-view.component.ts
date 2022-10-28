import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.model';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  board: Board = new Board ('Test board', [
    new Column('Ideas', [
      "Some Ideas",
      "More Ideas",
      "Just one more"
    ]),
    new Column ('Research', [
      "A research",
      "Another research",
      "One more research"
    ]),
    new Column ('Todo', [
      "New project",
      "New Kanban",
      "Update Portfolio"
    ]),
    new Column ('Done', [
      "First Kanban",
      "Copying more than doing",
    ])

  ]);


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
  }

}
