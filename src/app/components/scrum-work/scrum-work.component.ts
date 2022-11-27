import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-scrum-work',
  templateUrl: './scrum-work.component.html',
  styleUrls: ['./scrum-work.component.scss']
})
export class ScrumWorkComponent implements OnInit {

  constructor(
    private cookieService: CookieService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  goNext(): void {
    this.cookieService.set('level', '4');
    this.router.navigate(['/']);
  }

}
