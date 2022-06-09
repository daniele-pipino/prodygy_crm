import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AnnotationsService } from '../annotations.service';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-create-annotations',
  templateUrl: './create-annotations.component.html',
  styleUrls: ['./create-annotations.component.css'],
})
export class CreateAnnotationsComponent implements OnInit {
  @Output() update: EventEmitter<string> = new EventEmitter();
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
    this.update.emit('Update');
  }

  ngOnInit(): void {}
}
