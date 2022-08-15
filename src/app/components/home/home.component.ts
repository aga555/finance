import {Component, OnInit} from '@angular/core';
import {Lead} from '../../moedels/lead';
import {LeadForm} from '../../moedels/leadForm';
import {LeadService} from '../../services/lead.service';
import {DataService} from '../../services/data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  leadForm = new LeadForm('', '', '', '', '');

  constructor(private dataService: DataService, public leadService: LeadService) {

  }

  ngOnInit(): void {

  }

  saveLead() {
    const lead: Lead = {
      name: this.leadForm.name,
      surname: this.leadForm.surname,
      taxId: this.leadForm.taxId,
      phone: this.leadForm.phone,
      mail: this.leadForm.mail
    };
    this.dataService.createLead(lead).then(r => console.log(r));

  }

  // validation
  isFormValid() {
    return (this.isNameFieldValid() && this.isPhoneFieldValid() && this.isMailFieldValid());
  }

  isNameFieldValid() {
    return !(this.leadForm.name === null || this.leadForm.name === '');
  }

  isPhoneFieldValid() {
    return !(this.leadForm.phone === null || this.leadForm.phone === '');
  }

  isMailFieldValid() {
    return !(this.leadForm.mail === null || this.leadForm.mail === '');
  }

}
