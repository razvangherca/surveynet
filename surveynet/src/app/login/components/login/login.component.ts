import {Component, OnInit, ViewChild} from '@angular/core';
import {LoginService} from "../../services/login/login.service";
import {AuthenticationService} from "../../../shared/services/authentication/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'sn-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginForm') loginForm;

  public loading: boolean = false;
  public error: boolean = false;

  constructor(private loginService: LoginService,
              private auth: AuthenticationService,
              private router: Router) {
  }

  ngOnInit() {
  }

  submit(loginModel): void {
    if (loginModel.valid) {
      this.loading = true;
      this.loginService.login(loginModel.value).subscribe((res: any) => {
        this.auth.saveToken(res.token);
        this.loading = false;
        this.error = false;
        this.router.navigate(['/forms']);
      }, () => {
        this.loading = false;
        this.error = true;
      })
    }
  }

}
