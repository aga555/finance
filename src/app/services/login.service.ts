import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Constants} from '../constants';
import {AuthResp} from '../moedels/auth-resp';
import {User} from '../moedels/user';


@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private http: HttpClient) {
  }

  login(user: User) {
    const apiUrl = Constants.LOGIN;
    this.http.post<AuthResp>(apiUrl, user)
      .subscribe({
        next: (resp: AuthResp) => {
          localStorage.setItem('auth_token', JSON.stringify(resp.auth_token));
        }
      });
  }
}
