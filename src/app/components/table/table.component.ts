import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Lead} from '../../moedels/lead';
import {LeadService} from '../../services/lead.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {AuthService} from '../../services/auth.service';
import {DataService} from '../../services/data.service';
import {log} from 'util';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  leads: Lead[] = [];

  displayedColumns: string[] = ['name', 'taxId', 'phone', 'mail'];
  dataSource = new MatTableDataSource<Lead>(this.leads);

  constructor(private leadService: LeadService, private authService: AuthService, private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getLeadsList().subscribe(res => {
      this.leads = res.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as {}
        } as Lead;

      });
    });
  }

  //  this.getLeads();

  logout() {
    this.authService.logout();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}




