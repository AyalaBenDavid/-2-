import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { Present } from "../models/present.model"
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PresentService {

  constructor(private httpClient: HttpClient) { }

  private reloadPresentsSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  reloadPresents$: Observable<boolean> = this.reloadPresentsSubject.asObservable();
  showDialog:boolean=false;
  currentPresnt:Present=new Present;
  id:number=104;
  presents:Present[]=[];


  getPresents(): Observable<Present[]>{
    let url = 'http://localhost:4018/api/Present/GetPresent';
    //return null;
    return this.httpClient.get<Present[]>(url);
  }

  getPresentById(id: number) : Observable<Present>{
    let url = 'http://localhost:4018/api/Present/2' + id;
    return this.httpClient.get<Present>(url);
  }

  savePresent(present: Present) :Observable<boolean>{
    let url = 'http://localhost:4018/api/Present/UpDatePresent';
    return this.httpClient.put<boolean>(url, present);
  }

  addPresent(present: Present) :Observable<number> {
    let url = 'http://localhost:4018/api/Present/AddPresent'
    this.currentPresnt=new Present()
    this.currentPresnt.id=this.id++;
    this.showDialog=true;
    return this.httpClient.post<number>(url, present)
  }

  deletePresent(id: number): Observable<boolean>{
    let url="http://localhost:4018/api/Present/DeletePresent/"+id;
    return this.httpClient.delete<boolean>(url);
  }

  setReloadPresent(){
    let flag = this.reloadPresentsSubject.value;
    this.reloadPresentsSubject.next(!flag);
  }

  saveProduct($event:Present){
    var index= this.presents.findIndex(p=>p.id==$event.id);
    if(index>-1){
      console.log(index);
      this.savePresent($event).subscribe(()=>{
        this.getPresents().subscribe();
      });
    }
    else{
      const result = this.presents.some((p) => p.name.trim() === $event.name.trim());
      if(result){
        window.alert("יש כזה שם כבר במכירה")
      }
      else{
        this.addPresent($event).subscribe(()=>{
        this.getPresents().subscribe();

        });

      }
    }
  }

}
