import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Present } from '../models/present.model';
import { PresentService } from '../Servicies/present.service';
import { MessageService } from 'primeng/api';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addandedit',
  templateUrl: './addandedit.component.html',
  styleUrls: ['./addandedit.component.css']
})
export class AddandeditComponent implements OnChanges {
  @Input() selectedPresent:Present=new Present();
  @Output()closeDialog:EventEmitter<any>=new EventEmitter<any>();
  @Output() updateDetails:EventEmitter<Present>=new EventEmitter<Present>();
  @Output() presntFormChanged:EventEmitter <string[]> = new EventEmitter<string[]>();

  constructor(public presentService: PresentService) { }
  showDialog:boolean=false;

  presentForm:FormGroup=new FormGroup({
   id:new FormControl(null),
   name: new FormControl(null, [Validators.required, Validators.minLength(2),Validators.maxLength(20)]),
   contributor: new FormControl(null,[Validators.required]),
   cost: new FormControl('10', [Validators.required,Validators.min(10)])

  });

  ngOnChanges(changes: SimpleChanges): void {
    this.presentForm.patchValue(changes['selectedPresent'].currentValue);
  }
  
savePresent(){
if(this.presentService.valid){
  this.updateDetails.emit(this.presentForm.value);
  this.presntFormChanged.emit(this.presentForm.value)
    this.closeDialog.emit();
    }
    else{
      console.log('לא ואלידי ')
    }
}
cancel(){
  this.closeDialog.emit();
}

}


