import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-level-page',
  templateUrl: './level-page.component.html',
  styleUrls: ['./level-page.component.scss']
})
export class LevelPageComponent implements OnInit {
  title: string = '';
  step: number = 1;
  isShowErrorPopup = false;

  constructor(
    private cookieService: CookieService,
    private router: Router
  ) {
    this.title = this.cookieService.get('title');
    this.step = Number(this.cookieService.get('level'));

    if (this.title === '') {
      this.router.navigate(['/']);
    }

    if (this.step === 0) {
      this.resetLevel();
    }
  }

  ngOnInit(): void {
  }

  resetLevel(): void {
    this.cookieService.set('level', '1');
    this.cookieService.set('title', '');
    this.step = 1;
  }
}
