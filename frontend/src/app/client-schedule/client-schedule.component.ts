import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/model/client.modul';
import { AnnotationsService } from '../annotations.service';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-client-schedule',
  templateUrl: './client-schedule.component.html',
  styleUrls: ['./client-schedule.component.css'],
})
export class ClientScheduleComponent implements OnInit {
  clientID: any;
  client: any;
  annotations: any;
  modifyClientForm!: FormGroup;

  constructor(
    private router: ActivatedRoute,
    private clientsService: ClientsService,
    private annotationsSevice: AnnotationsService
  ) {}

  private initForm() {
    this.modifyClientForm = new FormGroup({
      name: new FormControl(),
      surname: new FormControl(),
      company_name: new FormControl(),
      email: new FormControl(),
      p_iva: new FormControl(),
      phone: new FormControl(),
    });
  }

  // get all the data
  async getData() {
    this.clientsService
      .getAllClientData(this.clientID)
      .subscribe((res: any) => {
        this.client = res.client;
        this.annotations = res.annotations;
      });
  }

  deleteAnnotation(id: number) {
    this.annotationsSevice.deleteAnnotation(id);
  }

  ngOnInit(): void {
    this.clientID = this.router.snapshot.paramMap.get('id');
    this.getData();
    this.initForm();
  }
}
