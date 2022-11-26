import { CdkDrag, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrum-intro',
  templateUrl: './scrum-intro.component.html',
  styleUrls: ['./scrum-intro.component.scss']
})
export class ScrumIntroComponent implements OnInit {

scrumDragQuestions: string[] = ['在固定時間內完成被交付的任務', '整個團隊代辦事項的清單', 'Scrum Master (SM)', '開發團隊 (DV)', '產品負責人 (PO)'];
products: string[] = [];
sprints: string[] = [];
role1: string[] = [];
role2: string[] = [];
role3: string[] = [];
isReadIntroStatus = [false, false, false];
isShowErrorPopup = false;
isShowPassedPopup = false;
isCanStartTest = false;
isTestPassed = false;
isTesting = false;

  constructor() { }

  ngOnInit(): void {
  }

  setIsReadStatus(index: number): void {
    this.isReadIntroStatus[index] = true;
    this.isCanStartTest = this.checkIsCanTest();
  }

  checkIsCanTest(): boolean {
    return this.isReadIntroStatus.every(readStatus => readStatus);
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

  dropToAnswer(event: CdkDragDrop<string[]>, text: string) {
    if (event.item.data === text) {
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
    if (this.products.length === 1 && this.sprints.length === 1 && this.role1.length === 1 && this.role2.length === 1 && this.role3.length === 1) {
      return true;
    }

    return false;
  }
}
