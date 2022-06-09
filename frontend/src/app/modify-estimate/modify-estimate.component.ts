import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EstimatesService } from '../estimates.service';

@Component({
  selector: 'app-modify-estimate',
  templateUrl: './modify-estimate.component.html',
  styleUrls: ['./modify-estimate.component.css'],
})
export class ModifyEstimateComponent implements OnInit {
  @Input() estimate: any;
  @Output() update: EventEmitter<string> = new EventEmitter();
  constructor(private estimateservice: EstimatesService) {}

  modifyEstimateForm: FormGroup = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    price: new FormControl(),
  });

  modify() {
    this.estimateservice.modify(
      this.modifyEstimateForm.value,
      this.estimate.id
    );
    this.update.emit('update');
  }

  ngOnInit(): void {
    if (this.estimate) {
      this.modifyEstimateForm.patchValue(this.estimate);
    }
  }
}
