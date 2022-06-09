import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-send-emal',
  templateUrl: './send-emal.component.html',
  styleUrls: ['./send-emal.component.css'],
})
export class SendEmalComponent implements OnInit {
  @Input()
  mail!: string;
  constructor(private emailservice: EmailService) {}

  newEmailForm = new FormGroup({
    to: new FormControl(''),
    sender: new FormControl(),
    firstname: new FormControl(),
    lastname: new FormControl(),
    message: new FormControl(),
  });

  sendEmail() {
    const data = this.newEmailForm.value;

    this.emailservice.send(data);
  }

  ngOnInit(): void {
    if (this.mail) {
      console.log(this.mail);
      this.newEmailForm.patchValue({ to: this.mail });
    }
  }
}
