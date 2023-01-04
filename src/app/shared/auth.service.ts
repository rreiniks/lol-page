import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
  })
  export class AuthService {
    isAuthenticated = true;
  
    constructor() { }

    auth(){
        this.isAuthenticated = true;
    }

    deAuth(){
        this.isAuthenticated = false;
    }
  }