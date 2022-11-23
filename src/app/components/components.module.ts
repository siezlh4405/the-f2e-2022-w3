import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from './intro/intro.component';
import { LevelPageComponent } from './level-page/level-page.component';



@NgModule({
  declarations: [
    IntroComponent,
    LevelPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
