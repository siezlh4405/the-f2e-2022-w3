import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from './intro/intro.component';
import { LevelPageComponent } from './level-page/level-page.component';
import { ScrumTestComponent } from './scrum-test/scrum-test.component';
import { ScrumIntroComponent } from './scrum-intro/scrum-intro.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrumMemberComponent } from './scrum-member/scrum-member.component';



@NgModule({
  declarations: [
    IntroComponent,
    LevelPageComponent,
    ScrumTestComponent,
    ScrumIntroComponent,
    ScrumMemberComponent
  ],
  imports: [
    CommonModule,
    DragDropModule
  ]
})
export class ComponentsModule { }
