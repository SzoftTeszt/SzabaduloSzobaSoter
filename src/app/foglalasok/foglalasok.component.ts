import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-foglalasok',
  templateUrl: './foglalasok.component.html',
  styleUrls: ['./foglalasok.component.css']
})
export class FoglalasokComponent {
foglalasok:any
error=false;
errorMessage=""
oszlopok=[
  {key:"datum", text:"Dátum", type:"datepicker" },
  {key:"nev", text:"Név", type:"text" },
  {key:"fo", text:"Fő", type:"number", min:2, max:16},
  {key:"cim", text:"Helyszín", type:"text" },
  {key:"iranyitoszam", text:"Irányítószám", type:"number", min:1000, max:9999 },
];
constructor(private base: BaseService){
  this.base.getAll().subscribe({
    next:(res)=>{this.foglalasok=res; this.error=false},
    error:(err)=>{this.error=true; this.errorMessage=err.message}
  })
}

}
