import { Injectable } from '@angular/core';


import { Router, CanActivate } from "@angular/router";
import { Auth } from "../services/auth.service";

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private auth:Auth,
    private router: Router

  ) { }

  canActivate (){

    if(this.auth.authenticated()){
      console.log("el guard paso");
      return true
      
    } else {
      console.log("Bloqueado por el guard")
      this.router.navigate(['/home'])
      return false
    }

  }

}
