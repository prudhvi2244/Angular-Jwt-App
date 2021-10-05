import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class JwtClientService {

  constructor(private http:HttpClient) { }


  login(login_credentials)
  {
    return this.http.post("http://localhost:8080/user/login",login_credentials);
  }

  accessAllBooks(token)
  {
    return this.http.get("http://localhost:8080/books",{headers:{"Authorization":token}})
  }

}
