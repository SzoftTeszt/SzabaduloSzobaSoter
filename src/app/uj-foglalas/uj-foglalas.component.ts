import { Component, ViewChild, inject } from '@angular/core';
import { BaseService } from '../base.service';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uj-foglalas',
  templateUrl: './uj-foglalas.component.html',
  styleUrls: ['./uj-foglalas.component.css']
})
export class UjFoglalasComponent {
  today = inject(NgbCalendar).getToday();

	// model?: NgbDateStruct;
	date:any={}; 
  // { year: number; month: number };
  foglalas:any={}

  @ViewChild('dp') dp:any;
  error=false;
  errorMessage=""
oszlopok=[
  {key:"datum", text:"Dátum", type:"datepicker" },
  {key:"nev", text:"Név", type:"text" },
  {key:"fo", text:"Fő", type:"number", min:2, max:16},
  {key:"cim", text:"Helyszín", type:"text" },
  {key:"iranyitoszam", text:"Irányítószám", type:"number", min:1000, max:9999 },
];

public model:any = {};
public selectedDate?:Date;
public dateWording:string = "yyyy-mm-dd";
public currentDateObj:any = {};

onSelect(evt:any){
  this.selectedDate = new Date(evt.year,evt.month-1,evt.day);
  console.log(this.selectedDate);
}
constructor(private base:BaseService, private router:Router){
  this.currentDateObj.year=new Date().getFullYear()
  this.currentDateObj.month=(new Date().getMonth()+1);
  // console.log(new Date().toDateString().substring(8,11))

  this.currentDateObj.day=Number(new Date().toDateString().substring(8,11))
}


changeDate(event:any){
  console.log(event.timeStamp)
}
save(){
  console.log(this.dp)
let ev=this.currentDateObj.year
let honap= (new Date().getMonth()+1)<10?"0"+String(new Date().getMonth()+1):(new Date().getMonth()+1);
  let day=Number(new Date().toDateString().substring(8,11));
  let nap= day<10?("0"+String(day)):String(day);
  this.foglalas.datum=ev+"-"+honap+"-"+nap
  this.base.add(this.foglalas).subscribe({
    next:(res)=> this.router.navigate(['/foglalasok']),
    error:(err)=> {this.error=true;this.errorMessage=err.message}
    
})
}
}
