import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Idle } from '@ng-idle/core';
declare const FB:any;
@Component({
  template: ''
})
export class LogoutComponent implements OnInit {

  constructor(
    private router: Router,
    // private idle:Idle
  ) {}
  ngOnInit() {
    
    sessionStorage.removeItem('currentUser');
    
    
      // this.idle.stop();
      // this.idle.ngOnDestroy(); //i
    
    this.router.navigate(['']);
    window.location.reload();
  }

}