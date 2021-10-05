import { Component, OnInit } from '@angular/core';
import { JwtClientService } from '../jwt-client.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

  constructor(private jwtService:JwtClientService) { }

  token:any;
  books:any
  ngOnInit(): void {
          this.userLogin({"username":"prudhvi2244","password":"prudhvi"})
  }


  userLogin(login_data)
  {
    this.jwtService.login(login_data)
                   .subscribe(response=>
                    {
                      console.log(response)
                      this.token=response
                      console.log(this.token["token"])
                      this.accessAllBooks(this.token["token"])
                      
                    }
                    ,error=>
                    {
                      console.log(error)
                    })
                    
  }


  accessAllBooks(token)
  {
    this.jwtService.accessAllBooks(token)
    .subscribe(
    response=>{
      console.log(response)
      this.books=response
    }
    ,error=>console.log(error))
  }



}
