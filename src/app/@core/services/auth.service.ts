import { Injectable } from '@angular/core';
import { LOGIN_QUERY, ME_DATA_QUERY } from 'src/app/@graphql/operations/query/user';
import { ApiService } from '../../@graphql/services/api.service';
import { Apollo } from 'apollo-angular';
import { map } from "rxjs/internal/operators/map"
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ApiService{

  constructor( apollo:Apollo) {
    super(apollo);
  }
  login(email: string, password: string) {
    return this.get(LOGIN_QUERY,{ email, password}).pipe(
      map((result: any) =>{
        return result.login;
      })
  )};

  getMe(){ 
    return this.get(ME_DATA_QUERY, {
      include: false
    },
    {
      headers: new HttpHeaders ({
        authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYyZGFiNzcxMWJjMjY0MDk3NDFjZDI4NSIsIm5hbWUiOiJMZWFuZHJvIiwibGFzdG5hbWUiOiJQb3NzYW56aW5pIiwiZW1haWwiOiJsZWFuZHJvcG9zc2FuemluaUBnbWFpbC5jb20iLCJyb2xlIjoiQURNSU4iLCJpZCI6MSwicmVnaXN0ZXJEYXRlIjoiMjAyMi0wNy0yMlQxNDo0Mjo1Ny42ODZaIn0sImlhdCI6MTY1ODg0MDM1NSwiZXhwIjoxNjU4OTI2NzU1fQ.7vDSqTw1ByF2u_KLDE_NS0rLN8ojVeClq9Pn41Rt1p0"
      })
    }).pipe(map((result: any ) =>{
      return result.me
    }));
  }
}
