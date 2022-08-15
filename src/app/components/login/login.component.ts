import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../../services/login.service';
import {User} from '../../moedels/user';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User('', ' ');

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  login() {
    if (this.user.email === '') {
      alert('Please enter email');
      return;
    }
    if (this.user.password === '') {
      alert('Please enter password');
      return;
    }
    this.authService.login(this.user.email, this.user.password);

    this.user.password = '';
    this.user.email = ' ';
  }

  cancel() {
    this.user.email = '';
    this.user.password = '';
    this.router.navigate(['/home']);
  }
}
