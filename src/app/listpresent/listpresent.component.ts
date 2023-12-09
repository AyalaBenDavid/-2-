import { Component, OnInit } from '@angular/core';
import { Present } from '../models/present.model';
import { PresentService } from '../Servicies/present.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FormGroup } from '@angular/forms';
@Component({
    selector: 'app-listpresent',
    templateUrl: './listpresent.component.html',
    styleUrls: ['./listpresent.component.css'],
    // providers: [ConfirmationService, MessageService]
})
export class ListpresentComponent implements OnInit{

    constructor(public presentService: PresentService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

    ngOnInit():void {
        this.presentService.reloadPresents$.subscribe(x => {
            this.presentService.getPresents().subscribe(lp => this.presentService.presents= lp);
        })
    }
    showDialog:boolean=false;
    submitted: boolean=false;
    presntForm : FormGroup = new FormGroup({})

    deletePresnt(presentId: number) {
        this.presentService.deletePresent(presentId).subscribe(()=> this.presentService.setReloadPresent());
    }

    editPresent(presentId: number) {
        var index=this.presentService.presents.findIndex(p=>p.id==presentId)
        this.presentService.currentPresnt=this.presentService.presents[index]; 
  
      }

      presntFormChanged = (event:any) =>{
        this.presntForm = event
      }

    addnew() {
     this.presentService.currentPresnt=new Present()
     this.showDialog=true;

    }

    hideDialog(){
        this.showDialog=false;
    }


    savePresent($event:Present){
        console.log($event);
      
        this.presentService.savePresent($event)
          this.showDialog = false;
        }




}