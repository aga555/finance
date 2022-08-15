import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth: AngularFireAuth, private  router: Router) {
  }

  login(mail: string, password: string) {
    this.fireAuth.signInWithEmailAndPassword(mail, password).then(() => {
        localStorage.setItem('token', String(true));
        this.router.navigate(['table']);
      },
      error => {
        alert(error);
      });
  }

  logout() {
    this.fireAuth.signOut().then(() => {
      localStorage.removeItem('token');
      this.router.navigate(['login']);
      },
      error => {
        alert(error);
      });
  }
}
