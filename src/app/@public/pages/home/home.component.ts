import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/@core/services/auth.service';
import { UsersService } from 'src/app/@core/services/users.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  constructor(private usersApi: UsersService, private auth: AuthService) { }
  ngOnInit(): void {
    this.auth.login("leandropossanzini@gmail.com","123456").subscribe(result =>{
      console.log(result);
    });

    this.usersApi.getUsers().subscribe(result => {
      console.log(result)
    })

    this.auth.getMe().subscribe(result => {
      console.log(result)
    })
  }

}
