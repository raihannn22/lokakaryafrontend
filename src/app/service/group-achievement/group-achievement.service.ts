import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupAchievementService {
  private apiUrl = 'http://localhost:8081/group-achievement';

  constructor(private http: HttpClient) {}

  getAllGroupAchievements(): Observable<any> {
    return this.http.get(`${this.apiUrl}/all`);
  }

  // saveGroupAchievement(data: any): Observable<any> {
  //   return this.http.put(`${this.apiUrl}/save`, data);
  // }

  saveGroupAchievement(groupAchievement: any): Observable<any> {
  return this.http.put(`${this.apiUrl}/save`, groupAchievement);
}

updateGroupAchievement(id: string, groupAchievement: any): Observable<any> {
  return this.http.patch(`${this.apiUrl}/update/${id}`, groupAchievement);
}


  getGroupAchievementById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/get/${id}`);
  }

  // updateGroupAchievement(id: string, data: any): Observable<any> {
  //   return this.http.patch(`${this.apiUrl}/update/${id}`, data);
  // }

  deleteGroupAchievement(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }
}
