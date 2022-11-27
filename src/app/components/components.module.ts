import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from './intro/intro.component';
import { LevelPageComponent } from './level-page/level-page.component';
import { ScrumTestComponent } from './scrum-test/scrum-test.component';
import { ScrumIntroComponent } from './scrum-intro/scrum-intro.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrumMemberComponent } from './scrum-member/scrum-member.component';
import { ScrumWorkComponent } from './scrum-work/scrum-work.component';
import { ScrumToolComponent } from './scrum-tool/scrum-tool.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    IntroComponent,
    LevelPageComponent,
    ScrumTestComponent,
    ScrumIntroComponent,
    ScrumMemberComponent,
    ScrumWorkComponent,
    ScrumToolComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    RouterModule
  ]
})
export class ComponentsModule { }
