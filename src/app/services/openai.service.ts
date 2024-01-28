import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 
import { environment } from 'src/environments/environment'
@Injectable({
  providedIn: 'root'
})
export class OpenaiService {

  private apiUrl = environment.apiUrl;
  constructor(private http : HttpClient) { }

  public sendMessage(message:String){
      return this.http.post<any>(`${this.apiUrl}/ask`, { message });
  }


}
