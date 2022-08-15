import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Lead} from '../moedels/lead';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs: AngularFirestore) {
  }

  getLeadsList() {
    return this.afs
      .collection('lead-collection')
      .snapshotChanges();
  }

  createLead(lead: Lead) {
    return new Promise<any>((resolve, reject) => {
      this.afs
        .collection('lead-collection')
        .add(lead)
        .then(response => {}, error => reject(error));
    });
  }
}
