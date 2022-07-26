import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from "rxjs/internal/operators/map"
import { USER_LIST_QUERY } from 'src/app/@graphql/operations/query/user';
import { ApiService } from '../../@graphql/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends ApiService{

  constructor(apollo:Apollo) {
    super(apollo);
   }

  getUsers(){
    return this.get(USER_LIST_QUERY,{
        include: true
    }).pipe(map((result:any) => {
      return result.users;
    }))
  }
}
