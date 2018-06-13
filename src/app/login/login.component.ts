import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators,ReactiveFormsModule } from '@angular/forms';
import { UserService } from "../service/user.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})

export class LoginComponent implements OnInit {
  rForm: FormGroup;
  isSignedIn: any;
  username: any;
  password: any;
  result: any;
  constructor(
    private fb: FormBuilder,
    private userService:UserService,
    private router:Router
  ) { 
    this.rForm = fb.group({
      'userName': [null, Validators.required],
      'userPassword': [null, Validators.required],  
    });
    this.isSignedIn =JSON.parse(sessionStorage.getItem('currentUser'));
  }
  Login(){
    const formModel = this.rForm.value;
      this.username=formModel.userName;
      this.password=formModel.userPassword; 
      var user:any={
        "username":this.username,
        "password":this.password,
      }
      console.log(user);
      this.userService.login(user)
      .subscribe(p=>
        { this.result=p;
          // console.log(this.result)
          if(this.result[0].role=="admin"){
            sessionStorage.setItem('currentUser', JSON.stringify(this.result[0].role));
            window.location.reload();
          }
        });
  }
  ngOnInit() {

  }
}
