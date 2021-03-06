import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  constructor() {

  }
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
}
