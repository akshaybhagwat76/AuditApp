import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SERVER_API_URL } from './app.constant';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
 

  constructor(private http:HttpClient) { }

  getRole(){
  return  this.http.get(SERVER_API_URL + '/dev/users/audit')
  }

  createUser(requestForm:any){
    
    return  this.http.post(SERVER_API_URL + '/dev/users/audit',requestForm, { responseType: 'text' })
  }



 

 

}
