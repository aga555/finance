import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Lead} from '../moedels/lead';

import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Constants} from '../constants';

@Injectable({
  providedIn: 'root'
})
export class LeadService {

  constructor(private  httpClient: HttpClient) {
  }

  getMyAllLeads(){
    return this.httpClient.get<Lead[]>(Constants.LEAD_ALL);
  }

  saveLead(lead: Lead): Observable<Lead> {
    return this.httpClient.post(Constants.LEAD_ALL, lead).pipe(map(
        data => data as Lead
    ));
  }
}
