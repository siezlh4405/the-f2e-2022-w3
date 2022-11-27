import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrum-tool',
  templateUrl: './scrum-tool.component.html',
  styleUrls: ['./scrum-tool.component.scss']
})
export class ScrumToolComponent implements OnInit {
  scrumDragQuestions: string[] = ['建立Sprint', '撰寫產規格書', '撰寫會議紀錄', '追蹤任務時程'];
  jiras: string[] = [];
  conflueces: string[] = [];
  isShowErrorPopup = false;
  isTesting = false;
  isShowPassedPopup = false;
  isTestPassed = false;

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  dropToAnswer(event: CdkDragDrop<string[]>, texts: string[]) {
    console.log(event.item.data);

    if (texts.indexOf(event.item.data) !== -1) {
      if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      } else {
        transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        this.isTestPassed = this.checkIsPassed();

        if (this.isTestPassed) {
          this.isShowPassedPopup = true;
        }
      }
    } else {
      this.isShowErrorPopup = true;
    }
  }


  checkIsPassed(): boolean {
    if (this.jiras.length === 2 && this.conflueces.length === 2) {
      return true;
    }

    return false;
  }
}
