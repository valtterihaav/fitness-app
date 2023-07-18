import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:8000'; // adjust with your FastAPI server URL

  constructor(private http: HttpClient) { }
/**
 * 
 * Get's data that is labeled as 'overall' in the backend i.e. doesn't fetch anything sport specific
 * 
 * @returns 
 */
  getOverallData(start_date: string | null, end_date: string | null): Observable<any> | null {
    console.log("here");
    if (start_date && end_date) {
      return this.http.get(`${this.baseUrl}/get_overall_data?start_date=${(start_date)}&end_date=${(end_date)}`); // adjust with your FastAPI route
    }
    return null
  }

  /**
   * Fetches all possible backend sport data that is available
   * 
   * @returns - All data that the backend has access to i.e. all sports etc
   */
  getAllData(): Observable<any> {
    
    return this.http.get(`${this.baseUrl}/get_all_data`); // adjust with your FastAPI route
  }

  /**
   * Fetches data for a specific sport from the backend
   * 
   * @param sport - sport that we are interested in
   * @returns - that specific sport information from the backend
   */
  getSpecificSportData(sport: string): Observable<any> {
    const parameters_to_backend: string = `&sport_data_to_get=${sport}`
    return this.http.get(`${this.baseUrl}/get_overall_data` + parameters_to_backend); // adjust with your FastAPI route
  }

}