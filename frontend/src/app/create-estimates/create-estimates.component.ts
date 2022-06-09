import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EstimatesService } from '../estimates.service';
@Component({
  selector: 'app-create-estimates',
  templateUrl: './create-estimates.component.html',
  styleUrls: ['./create-estimates.component.css'],
})
export class CreateEstimatesComponent implements OnInit {
  @Input() clientId: number = 0;
  @Output() update: EventEmitter<string> = new EventEmitter();
  constructor(private estimateService: EstimatesService) {}

  newEstimateForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
  });

  create() {
    const data = this.newEstimateForm.value;
    this.estimateService.create(data, this.clientId);
    this.update.emit('update');
  }
  ngOnInit(): void {}
}
