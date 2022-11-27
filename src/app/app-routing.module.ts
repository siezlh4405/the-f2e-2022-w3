import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './components/intro/intro.component';
import { LevelPageComponent } from './components/level-page/level-page.component';
import { ScrumTestComponent } from './components/scrum-test/scrum-test.component';

const routes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'level', component: LevelPageComponent },
  { path: 'step1', component: ScrumTestComponent },
  { path: 'step2', component: ScrumTestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
