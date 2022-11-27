import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-scrum-test',
  templateUrl: './scrum-test.component.html',
  styleUrls: ['./scrum-test.component.scss']
})
export class ScrumTestComponent implements OnInit {
  step: number = 1;
  isShowErrorPopup = false;

  constructor(
    private router: Router,
    private cookieService: CookieService,
  ) { }

  ngOnInit(): void {
    const title = this.cookieService.get('title');

    if (this.router.url.indexOf('step1') !== -1) {
      this.step = 1;
    } else if (this.router.url.indexOf('step2') !== -1) {
      this.step = 2;
    } else if (this.router.url.indexOf('step3') !== -1) {
      this.step = 3;
    } else if (this.router.url.indexOf('step4') !== -1) {
      this.step = 4;
    }

    const cookieStep = Number(this.cookieService.get('level'));

    if (title === '') {
      this.router.navigate(['/']);
      return;
    }

    if (cookieStep !== this.step) {
      this.router.navigate(['/level']);
    }
  }

  resetLevel(): void {
    this.cookieService.set('title', '');
    this.cookieService.set('level', '1');
    this.step = 1;
  }

}
