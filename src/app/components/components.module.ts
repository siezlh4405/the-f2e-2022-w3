import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from './intro/intro.component';
import { LevelPageComponent } from './level-page/level-page.component';
import { ScrumTestComponent } from './scrum-test/scrum-test.component';
import { ScrumIntroComponent } from './scrum-intro/scrum-intro.component';



@NgModule({
  declarations: [
    IntroComponent,
    LevelPageComponent,
    ScrumTestComponent,
    ScrumIntroComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
