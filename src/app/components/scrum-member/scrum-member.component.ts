import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-scrum-member',
  templateUrl: './scrum-member.component.html',
  styleUrls: ['./scrum-member.component.scss']
})
export class ScrumMemberComponent implements OnInit {
  scrumDragQuestions: string[] = ['主導團隊的流程，提升團隊效率，系統性的執行任務，扮演團隊中的潤滑劑。', '負責開發產品，是任務的執行端。', '負責幫助團隊了解目標、安排Product Backlog任務優先度，並且專注於客戶需求。'];
  pdAnswer: string[] = [];
  smAnswer: string[] = [];
  dvAnswer: string[] = [];
  isShowErrorPopup = false;
  isTesting = false;
  isShowPassedPopup = false;
  isTestPassed = false;
  step = 1;

  constructor(
    private cookieService: CookieService,
  ){ }

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

  dropToAnswer(event: CdkDragDrop<string[]>, text: string) {
    console.log(event.item.data);

    if (event.item.data === text) {
      if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      } else {
        transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        this.isTestPassed = this.checkIsPassed();

        if (this.isTestPassed) {
          this.isShowPassedPopup = true;
          this.cookieService.set('level', '3');
        }
      }
    } else {
      this.isShowErrorPopup = true;
    }
  }

  checkIsPassed(): boolean {
    if (this.pdAnswer.length === 1 && this.smAnswer.length === 1 && this.dvAnswer.length === 1) {
      return true;
    }

    return false;
  }

  goToReview(): void {
    this.isShowErrorPopup = false;
    this.isTesting = false;
    this.scrumDragQuestions = ['主導團隊的流程，提升團隊效率，系統性的執行任務，扮演團隊中的潤滑劑。', '負責開發產品，是任務的執行端。', '負責幫助團隊了解目標、安排Product Backlog任務優先度，並且專注於客戶需求。'];
    this.pdAnswer.length = 0;
    this.smAnswer.length = 0;
    this.dvAnswer.length = 0;
    this.step = 1;
  }
}
