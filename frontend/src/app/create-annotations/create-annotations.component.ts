import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AnnotationsService } from '../annotations.service';
@Component({
  selector: 'app-create-annotations',
  templateUrl: './create-annotations.component.html',
  styleUrls: ['./create-annotations.component.css'],
})
export class CreateAnnotationsComponent implements OnInit {
  constructor(private annotationsService: AnnotationsService) {}

  @Input()
  clientID!: number;
  newAnnotationsForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  });

  createAnnotations() {
    const newAnnotations = this.newAnnotationsForm.value;
    this.annotationsService.createAnnotations(newAnnotations, this.clientID);
  }

  ngOnInit(): void {}
}
