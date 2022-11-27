import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  constructor(
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const title = this.cookieService.get('title');

    if (title === '新手' || title === '菜鳥') {
      this.router.navigate(['/level']);
    }
  }

  setTitle(title: '新手' | '菜鳥'): void {
    this.cookieService.set('title', title);
    this.router.navigate(['/level']);
  }
}
